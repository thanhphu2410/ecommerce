<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Color;
use App\Models\Review;
use App\Models\Product;
use App\Models\Category;
use App\Models\ReviewImage;
use App\Models\SubCategory;
use App\Models\ProductAttribute;
use App\Http\Requests\ReviewRequest;

class ShopController extends Controller
{
    public function index()
    {
        // $products = $this->filter();
        $products = Product::limit(1)->get();
        $categories = Category::all();
        $subCategories = SubCategory::all();
        $sizes = Size::all();
        $colors = Color::all();
        return view('frontend.shop.index', compact('products', 'categories', 'sizes', 'subCategories', 'colors'));
    }

    public function show(Product $product)
    {
        $product->load(['attributes.images', 'reviews.images', 'sizes']);
        $relatedProducts = $product->related;
        $reviews = $product->reviews()->paginate(5);
        $ratingStar = round($reviews->average('rating'));
        $sizes = $product->sizes->unique('id');
        $colors = ProductAttribute::where('product_id', $product->id)->where('size_id', $sizes[0]->id)->get()->unique('color_id');
        return view('frontend.shop.show', compact('product', 'relatedProducts', 'reviews', 'ratingStar', 'colors', 'sizes'));
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

    public function filter()
    {
        $priceRange = [
            '0' => ['min' => 0, 'max' => 200],
            '1' => ['min' => 200, 'max' => 299],
            '2' => ['min' => 300, 'max' => 399],
            '3' => ['min' => 400, 'max' => 499],
            '4' => ['min' => 500, 'max' => 99999999999],
        ];

        $products = Product::query()->active();
        if (request('category')) {
            $subcategories = SubCategory::whereIn('category_id', explode(",", request('category')))->get()->modelKeys();
            $products->whereIn('sub_category_id', $subcategories);
        }

        if (request('subcategory')) {
            $products->whereIn('sub_category_id', explode(",", request('subcategory')));
        }

        if (request('price')) {
            $price = explode(",", request('price'));
            unset($price[count($price) - 1]);
            foreach ($price as $index=>$value) {
                $min = $priceRange[$value]['min'];
                $max = $priceRange[$value]['max'];
                if ($index > 0) {
                    $products->orWhereBetween('price', [$min, $max]);
                    continue;
                }
                $products->whereBetween('price', [$min, $max]);
            }
        }

        if (request('size')) {
            $productIds = ProductAttribute::whereIn('size_id', explode(",", request('size')))->pluck('product_id');
            $products->whereIn('id', $productIds);
        }

        if (request('color')) {
            $productIds = ProductAttribute::whereIn('color_id', explode(",", request('color')))->pluck('product_id');
            $products->whereIn('id', $productIds);
        }

        if (request('name')) {
            $products->where('name', 'LIKE', '%'.request('name').'%');
        }

        return $products->orderBy('price', request('sortby', 'asc'))->get();
    }

    public function getColor($product, $size)
    {
        $attributes = ProductAttribute::where('product_id', $product)->where('size_id', $size)->get()->unique('color_id');
        $attributes->load('color');
        return $attributes;
    }
}
