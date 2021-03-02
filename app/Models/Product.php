<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    
    public function images()
    {
        return $this->hasMany('App\Models\ProductImage');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag');
    }

    public function sizes()
    {
        return $this->belongsToMany('App\Models\Size');
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = Str::title($value);
    }
}
