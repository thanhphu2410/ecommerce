<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $guarded = [];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    public static function isExists()
    {
        return WishList::whereUserId(Auth::id())
                ->whereProductId(request('product_id'))->first() ? true : false;
    }
}
