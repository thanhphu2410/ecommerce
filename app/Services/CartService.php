<?php

namespace App\Services;

class CartService
{
    public static function total($cart, $products)
    {
        $total = $index = 0;
        foreach ($cart as $item) {
            $total += $item[0]['quantity'] * $products[$index]->after_discount;
            $index ++;
        }
        return $total;
    }
}
