<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Color;
use App\Models\Promo;
use App\Models\District;
use App\Models\Province;
use App\Models\ProductAttribute;

class AjaxController extends Controller
{
    public function findPromos($code)
    {
        return Promo::where('code', $code)->first();
    }

    public function getColor($product, $size)
    {
        $attributes = ProductAttribute::where('product_quantity', '>', 0)
                    ->where('product_id', $product)
                    ->where('size_id', $size)
                    ->get()
                    ->unique('color_id');
                    
        $attributes->load('color');
        return $attributes;
    }

    public function getAttribute()
    {
        return ProductAttribute::where('product_id', request('product'))
                    ->where('size_id', request('size'))
                    ->where('color_id', request('color'))
                    ->first();
    }

    public function getDistrict(Province $province)
    {
        return response()->json($province->districts);
    }
    
    public function getWards(District $district)
    {
        return response()->json($district->wards);
    }

    public function getAllAttributes()
    {
        $attributes = [
            'sizes' => Size::all(),
            'colors' => Color::all(),
        ];
        return $attributes;
    }

    public function paypalPaid()
    {
        session()->put('paypal_paid', true);
        return true;
    }
}
