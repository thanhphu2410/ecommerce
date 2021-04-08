<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Province;
use App\Models\OrderDetail;
use App\Services\CartService;
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
            return back();
        }
        $order = Order::create($request->validated());
        OrderDetail::storeItem($order);
        session()->forget("cart");
        return success("home", "Checkout successful");
    }
}
