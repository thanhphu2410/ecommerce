<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\CartService;
use App\Http\Requests\CartRequest;

class CartController extends Controller
{
    public function index()
    {
        try {
            $cart = session('cart', []);
            $products = Product::find(array_keys($cart));
            $total = CartService::total($cart, $products);
            return view('frontend.cart', compact('cart', 'products', 'total'));
        } catch (\Exception $th) {
            session()->flush();
            return error();
        }
    }

    public function store(CartRequest $request)
    {
        $sessionKey = 'cart.'.request('product_id');
        $collect = collect(session($sessionKey, []));

        //nếu sản phẩm đã có trong session thì chỉ tăng số lượng, ngược lại thì thêm vào session
        $key = $collect->where('size', request('size'))->where('color', request('color'))->keys();
        if ($key->count() == 0) {
            session()->push($sessionKey, $request->validated());
        } else {
            session()->increment($sessionKey.'.'.$key[0].'.quantity', request('quantity'));
        }
        return success('cart.index', 'Added to cart');
    }

    // public function update()
    // {
    //     foreach (session('cart', []) as $index=>$item) {
    //         $i = 0;
    //         foreach (session('cart.'.$index) as $key=>$value) {
    //             $sessionKey = 'cart.'.$index.'.'.$key.'.quantity';
    //             session()->put($sessionKey, request('quantity'.$index.'.'.$i));
    //             $i ++;
    //         }
    //     }
    //     return success('cart.index', 'Updated successful');
    // }

    public function updateAjax()
    {
        $sessionKey = 'cart.'.request('product').'.'.request('key').'.quantity';
        session()->put($sessionKey, request('quantity'));
        $cart = session('cart', []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        return response()->json($total);
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
