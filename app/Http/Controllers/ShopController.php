<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Product;
use App\Models\ReviewImage;
use App\Http\Requests\ReviewRequest;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::active()->paginate(9);
        return view('frontend.shop.index', compact('products'));
    }

    public function show(Product $product)
    {
        $product->load(['images', 'sizes', 'reviews.images']);
        $relatedProducts = $product->related;
        $reviews = $product->reviews()->paginate(5);
        $ratingStar = round($reviews->average('rating'));
        return view('frontend.shop.show', compact('product', 'relatedProducts', 'reviews', 'ratingStar'));
    }
    
    public function review(ReviewRequest $request, Review $review)
    {
        $reviewed = $review->isReviewed($request);

        $data = $request->validated();

        $review = $reviewed ? $this->updateReview($reviewed, $data) : Review::create($data);

        ReviewImage::storeReviewImage($review, request('images'));

        return back();
    }

    private function updateReview($reviewed, $data)
    {
        $reviewed->update($data);

        ReviewImage::deleteItem($reviewed);

        return $reviewed;
    }
}
