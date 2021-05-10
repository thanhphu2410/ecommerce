<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\Province;
use App\Mail\CheckoutMail;
use App\Models\OrderDetail;
use Illuminate\Support\Str;
use App\Services\CartService;
use App\Notifications\NewOrder;
use App\Services\CheckoutService;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\CheckoutRequest;

class CheckoutController extends Controller
{
    public function create()
    {
        $cart = session('cart', []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        $provinces = Province::all();
        
        $user = '';
        
        //nếu user đã đăng nhập, lấy thông tin và render lên form checkout
        if (auth()->check()) {
            $user = auth()->user()->load(['province.districts', 'district.wards']);
        }
        return view('frontend.checkout', compact('products', 'cart', 'total', 'provinces', 'user'));
    }

    public function store(CheckoutRequest $request)
    {
        //kiểm tra xem số lượng hàng tồn còn đủ so với số lượng mong muốn của user không
        if (!CheckoutService::checkQuantity()) {
            return error('checkout.create', 'Your product is out of stock');
        }
        
        $order = Order::create($request->validated());
        
        //tạo ra id đơn hàng để dùng cho việc check đơn hàng
        $order->update(['order_no' => str_pad($order->id, 10, Str::random(100))]);

        OrderDetail::storeItem($order);

        User::find(1)->notify(new NewOrder($order));

        Mail::to(request('customer_email'))->queue(new CheckoutMail($order));
        
        session()->forget(['cart', 'paypal_paid']);
        return success('home', 'Checkout successful');
    }
}
