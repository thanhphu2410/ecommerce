<?php

namespace App\Services;

use App\Models\ProductAttribute;

class CheckoutService
{
    public static function checkQuantity()
    {
        foreach (request('product_id') as $index => $value) {
            $attribute = ProductAttribute::where('product_quantity', '>=', request('quantity')[$index])
                            ->where('product_id', $value)
                            ->where('size_id', request('size_id')[$index])
                            ->where('color_id', request('color_id')[$index])
                            ->first();
            if (!$attribute) {
                session()->forget('cart.'.$value.'.'.$index);
                return false;
            }
        }
        return true;
    }
}
