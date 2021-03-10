<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];

    public function details()
    {
        return $this->hasMany('App\Models\OrderDetail');
    }

    public function products()
    {
        return $this->belongsToMany('App\Models\Product', 'order_details');
    }
}
