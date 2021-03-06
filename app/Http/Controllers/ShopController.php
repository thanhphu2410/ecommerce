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
        $reviews = $product->reviews()->paginate(5);
        return view('frontend.shop.show', compact('product', 'relatedProducts', 'reviews'));
    }
    
    public function review(ReviewRequest $request, Review $review)
    {
        $reviewed = $review->isReviewed($request);
        $data = $request->validated();
        $reviewed ? $reviewed->update($data) : Review::create($data);
        return back();
    }
}
