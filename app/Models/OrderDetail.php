<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $guarded = [];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    public function size()
    {
        return $this->belongsTo('App\Models\Size');
    }

    public static function addItem($order)
    {
        foreach (request('product_id') as $index => $value) {
            $product = Product::find($value);
            $productSize = ProductSize::firstWhere(['product_id' => $value,'size_id' => request('size_id')[$index]]);
            
            $data = [
                'product_id' => $value,
                'quantity' => request('quantity')[$index],
                'discount' => $product->discount,
                'total' => request('total')[$index],
                'size_id' => request('size_id')[$index],
            ];
            $order->details()->create($data);

            $product->decrement('quantity', request('quantity')[$index]);
            $productSize->decrement('product_quantity', request('quantity')[$index]);
        }
    }
}
