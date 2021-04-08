<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\CartService;
use App\Http\Requests\CartRequest;

class CartController extends Controller
{
    public function index()
    {
        $cart = session("cart", []);
        $products = Product::find(array_keys($cart));
        $total = CartService::total($cart, $products);
        return view("frontend.cart", compact("cart", "products", "total"));
    }

    public function store(CartRequest $request)
    {
        $key = "cart.".request("product_id");
        $cart = $request->validated();
        session()->has($key) ? session()->increment($key.".0.quantity") : session()->push($key, $cart);
        return success("cart.index", "Added to cart");
    }

    public function update()
    {
        foreach (request("product_id", []) as $index=>$item) {
            $key = "cart.".$item.".0.quantity";
            session()->put($key, request("quantity.".$index));
        }
        return success("cart.index", "Updated successful");
    }

    public function destroy($id)
    {
        session()->forget("cart.".$id);
        return response()->json(["success"=> "Success"]);
    }
}
