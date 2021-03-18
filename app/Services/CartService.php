<?php

namespace App\Services;

class CartService
{
    public static function total($cart, $products, $total = 0)
    {
        foreach ($products as $product) {
            $total += $cart[$product->id][0]['quantity'] * $product->after_discount;
        }
        return $total;
    }
}
