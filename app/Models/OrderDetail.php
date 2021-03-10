<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $guarded = [];

    public static function addItem($order)
    {
        foreach (request('product_id') as $index => $value) {
            $data = [
                'product_id' => $value,
                'quantity' => request('product_id')[$index],
                'price' => request('price')[$index],
                'discount' => Product::find($value)->discount,
                'total' => request('total')[$index],
                'size_id' => request('size_id')[$index],
            ];
            $order->details()->create($data);
        }
    }
}
