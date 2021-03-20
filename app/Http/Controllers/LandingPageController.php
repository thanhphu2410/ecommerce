<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Product;

class LandingPageController extends Controller
{
    public function index(Product $product)
    {
        $bestSellers = $product->best_seller;
        $newArrivals = $product->new_arrival;
        $hotSales = $product->hot_sale;
        $blogs = Blog::latest()->limit(3)->get();
        return view('frontend.index', compact('bestSellers', 'newArrivals', 'hotSales', 'blogs'));
    }
}
