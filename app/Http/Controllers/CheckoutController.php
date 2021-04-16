<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\Province;
use App\Models\OrderDetail;
use Illuminate\Support\Str;
use App\Services\CartService;
use App\Notifications\NewOrder;
use App\Http\Requests\CheckoutRequest;

class CheckoutController extends Controller
{
    public function create()
    {
        $cart = session('cart', []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        $provinces = Province::all();
        return view('frontend.checkout.create', compact('products', 'cart', 'total', 'provinces'));
    }

    public function store(CheckoutRequest $request)
    {
        if (!Product::checkQuantity()) {
            return error('checkout.create');
        }
        
        $order = Order::create($request->validated());
        
        $order->update(['order_no' => str_pad($order->id, 10, Str::random(100))]);

        OrderDetail::storeItem($order);

        User::find(1)->notify(new NewOrder($order));
        
        session()->forget('cart');
        return success('home', 'Checkout successful');
    }

    public function orderCheckView()
    {
        return view('frontend.order_checking');
    }

    public function orderChecking()
    {
        $order = Order::where('order_no', request('order_no'))->first();
        return view('frontend.order_checking', compact('order'));
    }
}
