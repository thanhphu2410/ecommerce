<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishListController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $wishlist = auth()->user()->wishlist;
        return view('frontend.wishlist', compact('wishlist'));
    }

    public function store()
    {
        if (!Wishlist::isExists()) {
            auth()->user()->wishlist()->create(['product_id' => request('product_id')]);
        }
        return back();
    }

    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();
        return back();
    }
}
