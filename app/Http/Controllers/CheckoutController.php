<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Province;
use App\Mail\CheckoutMail;
use App\Models\OrderDetail;
use Illuminate\Support\Str;
use App\Services\CartService;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\CheckoutRequest;

class CheckoutController extends Controller
{
    public function create()
    {
        $cart = session("cart", []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        $provinces = Province::all();
        return view("frontend.checkout.create", compact("products", "cart", "total", "provinces"));
    }

    public function store(CheckoutRequest $request)
    {
        if (!Product::checkQuantity()) {
            session()->push("error", "This is notification");
            return error("checkout.create");
        }
        $order = Order::create($request->validated());
        $order_no = str_pad($order->id, 10, Str::random(100));
        $order->update(['order_no' => $order_no]);
        OrderDetail::storeItem($order);
        Mail::to("thanhphu2410@gmail.com")->send(new CheckoutMail($order));
        // session()->forget("cart");
        return success("home", "Checkout successful");
    }
}
