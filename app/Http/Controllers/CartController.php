<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Models\Product;
use App\Services\CartService;

class CartController extends Controller
{
    public function index()
    {
        $cart = session('cart') ?? [];
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);

        return view('frontend.cart', compact('cart', 'products', 'total'));
    }

    public function create()
    {
        //
    }

    public function store(CartRequest $request)
    {
        $key = "cart.".request('product_id');
        $cart = $request->validated();

        session()->has($key) ? session()->increment($key.'.0.quantity') : session()->push($key, $cart);
        
        return back();
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update()
    {
        foreach (request('product_id') ?? [] as $index=>$item) {
            $key = "cart.".$item;
            $cart = [
                'product_id' => $item,
                'quantity' => request('quantity.'.$index),
                'size' => request('size'.$item)
            ];
    
            session()->forget('cart.'.$item);
            session()->push($key, $cart);
        }
        return back();
    }

    public function destroy($id)
    {
        session()->forget('cart.'.$id);
        return response()->json(['success'=> 'Success']);
    }
}
