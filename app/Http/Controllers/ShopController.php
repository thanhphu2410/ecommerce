<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Product;
use App\Models\Review;

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
        $relatedProducts = $product->related;
        $reviews = Review::all();
        return view('frontend.shop.show', compact('product', 'relatedProducts', 'reviews'));
    }
    
    public function comment(ReviewRequest $request)
    {
        Review::create($request->validated());
        return back();
    }
}
