<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    
    /*  *****************************RELATIONSHIP***************************** */
    public function images()
    {
        return $this->hasMany('App\Models\ProductImage');
    }

    public function subCategory()
    {
        return $this->belongsTo('App\Models\SubCategory');
    }

    public function sizes()
    {
        return $this->belongsToMany('App\Models\Size');
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }
    
    /*  *****************************MUTATORS***************************** */

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = Str::title($value);
    }

    /*  *****************************ACCESSORS***************************** */

    public function getBestSellerAttribute()
    {
        return $this->select('products.*')
            ->join('order_details', 'products.id', '=', 'order_details.product_id')
            ->groupBy('order_details.product_id')
            ->orderByRaw('COUNT(*) DESC')
            ->limit(8)
            ->with('images')
            ->get();
    }

    public function getNewArrivalAttribute()
    {
        return $this->latest()->limit(8)->with('images')->get();
    }

    public function getHotSaleAttribute()
    {
        return $this->orderBy('discount', 'desc')->limit(8)->with('images')->get();
    }

    public function getRelatedAttribute()
    {
        return Product::where('sub_category_id', $this->sub_category_id)
            ->where('id', '!=', $this->id)
            ->with('images')
            ->get();
    }

    public function getFirstImageAttribute()
    {
        return $this->images->first()->path;
    }

    public function getCategoryAttribute()
    {
        return $this->subCategory->category;
    }

    public function getAfterDiscountAttribute()
    {
        return $this->price - $this->price * ($this->discount / 100);
    }
}
