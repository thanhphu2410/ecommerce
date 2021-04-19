<?php

namespace App\Http\Controllers;

use App\User;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = User::customer()->latest()->paginate(10);
        return view('backend.customer.index', compact('customers'));
    }

    public function show(User $customer)
    {
        $customer->load(['reviews.images', 'wishlist']);
        $reviews = $customer->reviews;
        $wishlist = $customer->wishlist;
        return view('backend.customer.show', compact('customer', 'reviews', 'wishlist'));
    }
}
