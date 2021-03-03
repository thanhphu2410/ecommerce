<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::paginate(9);
        return view('frontend.shop.index', compact('products'));
    }

    public function show(Product $product)
    {
        $product->load(['images', 'sizes']);
        return view('frontend.shop.show', compact('product'));
    }
}
