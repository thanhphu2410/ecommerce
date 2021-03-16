<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Province;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use App\Services\CartService;
use App\Http\Requests\CheckoutRequest;
use App\Models\ProductSize;

class CheckoutController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        $cart = session('cart') ?? [];
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        $provinces = Province::all();
        
        return view('frontend.checkout.create', compact('products', 'cart', 'total', 'provinces'));
    }

    public function store(CheckoutRequest $request)
    {
        if (!Product::checkQuantity()) {
            session()->push("error", "This is notification");
            return back();
        }
        $order = Order::create($request->validated());
        OrderDetail::addItem($order);
        session()->forget('cart');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
