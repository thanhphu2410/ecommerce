<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Album;
use App\Models\Promo;
use App\Models\Product;
use App\Models\Category;

class LandingPageController extends Controller
{
    public function index(Product $product)
    {
        $bestSellers = $product->best_seller;
        $newArrivals = $product->new_arrival;
        $hotSales = $product->hot_sale;
        $blogs = Blog::latest()->limit(3)->get();
        $categories = Category::inRandomOrder()->limit(3)->get();
        $album = Album::display()->first()->load('images');
        return view('frontend.index', compact('bestSellers', 'newArrivals', 'hotSales', 'blogs', 'categories', 'album'));
    }
}
