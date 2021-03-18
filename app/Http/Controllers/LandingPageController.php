<?php

namespace App\Http\Controllers;

use App\Models\Product;

class LandingPageController extends Controller
{
    public function index(Product $product)
    {
        $bestSellers = $product->best_seller;
        $newArrivals = $product->new_arrival;
        $hotSales = $product->hot_sale;
        return view('frontend.index', compact('bestSellers', 'newArrivals', 'hotSales'));
    }
}
