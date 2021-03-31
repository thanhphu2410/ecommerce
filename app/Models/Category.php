<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function subcategories()
    {
        return $this->hasMany('App\Models\SubCategory');
    }

    public function products()
    {
        $subcategories = SubCategory::whereIn('category', request('category'))->modelKeys();
        return Product::with('images')->whereIn('sub_category_id', $subcategories)->get();
    }

    public function setImagePathAttribute()
    {
        if (request()->has('image_path')) {
            $path = request('image_path')->store('category', 'public');
            $this->attributes['image_path'] = "storage/".$path;
        }
    }
}
