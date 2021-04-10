<?php

namespace App\Services;

class CartService
{
    public static function total($cart, $products, $total = 0)
    {
        foreach ($products as $product) {
            foreach (session('cart.'.$product->id) as $index=>$item) {
                $total += $cart[$product->id][$index]['quantity'] * $product->after_discount;
            }
        }
        return $total;
    }
}
