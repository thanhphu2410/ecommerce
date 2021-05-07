<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\CartService;
use App\Http\Requests\CartRequest;

class CartController extends Controller
{
    public function index()
    {
        $cart = session('cart', []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        return view('frontend.cart', compact('cart', 'products', 'total'));
    }

    public function store(CartRequest $request)
    {
        $sessionKey = 'cart.'.request('product_id');
        $cart = $request->validated(); 
        $index = -1;
        foreach (session($sessionKey, []) as $key=>$value) {
            if ($value['size'] == request('size') && $value['color'] == request('color')) {
                $index = $key;
            }
        }
        if ($index == -1) {
            session()->push($sessionKey, $cart);
        } else {
            session()->increment($sessionKey.'.'.$index.'.quantity', request('quantity'));
        }
        return success('cart.index', 'Added to cart');
    }

    public function update()
    {
        foreach (session('cart', []) as $index=>$item) {
            $i = 0;
            foreach (session('cart.'.$index) as $key=>$value) {
                $sessionKey = 'cart.'.$index.'.'.$key.'.quantity';
                session()->put($sessionKey, request('quantity'.$index.'.'.$i));
                $i ++;
            }
        }
        return success('cart.index', 'Updated successful');
    }

    public function destroy($id)
    {
        session()->forget('cart.'.$id.'.'.request('index'));
        if (count(session('cart.'.$id)) == 0) {
            session()->forget('cart.'.$id);
        }
        return response()->json(['success'=> 'Success']);
    }
}
