<?php

namespace App\Models;

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
}
