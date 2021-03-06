<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getUserNameAttribute()
    {
        return $this->user->name;
    }

    public function isReviewed($request)
    {
        return $this->where('product_id', $request->product_id)->where('user_id', $request->user_id)->first();
    }
}
