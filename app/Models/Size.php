<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    protected $guarded = [];

    public static function getData()
    {
        foreach (request('sizes') as $index => $size) {
            $data[$size] = ['product_quantity' => request('quantity')[$index]];
        }
        return $data;
    }

    public function getQuantityAttribute()
    {
        return $this->pivot->product_quantity;
    }
}
