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
        return $this->belongsToMany('App\Models\Size')->withPivot('product_quantity');
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

    public function orders()
    {
        return $this->hasMany('App\Models\OrderDetail');
    }

    /*  *****************************QUERY SCOPE***************************** */

    public function scopeActive($query)
    {
        return $query->where('products.quantity', '>', 0);
    }

    /*  *****************************MUTATORS***************************** */

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = Str::title($value);
    }

    public function setQuantityAttribute()
    {
        $this->attributes['quantity'] = collect(request('quantity'))->sum();
    }

    /*  *****************************ACCESSORS***************************** */

    public function getBestSellerAttribute()
    {
        return $this->select('products.*')
            ->active()
            ->join('order_details', 'products.id', '=', 'order_details.product_id')
            ->groupBy('order_details.product_id')
            ->orderByRaw('COUNT(*) DESC')
            ->limit(8)
            ->with('images')
            ->get();
    }

    public function getNewArrivalAttribute()
    {
        return $this->latest()->active()->limit(8)->with('images')->get();
    }

    public function getHotSaleAttribute()
    {
        return $this->where('discount', '>', 0)
            ->active()
            ->orderBy('discount', 'desc')
            ->limit(8)
            ->with('images')
            ->get();
    }

    public function getRelatedAttribute()
    {
        return $this->where('sub_category_id', $this->sub_category_id)
            ->active()
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

    public function getRatingStarAttribute()
    {
        return round($this->reviews->average('rating'));
    }

    /*  *****************************METHODS***************************** */

    public static function checkQuantity()
    {
        foreach (request('product_id') as $index => $value) {
            $product = Product::find($value);
            if ($product->quantity < request('quantity')[$index]) {
                session()->forget('cart.'.$value);
                return false;
            }
        }
        return true;
    }
}
