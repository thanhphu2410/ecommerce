<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $guarded = [];

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag');
    }

    public function setImagePathAttribute()
    {
        if (request()->has('image_path')) {
            $path = request('image_path')->store('blog', 'public');
            $this->attributes['image_path'] = "storage/".$path;
        }
    }

    public static function relatedPost($blog)
    {
        $blogIds = BlogTag::relatedBlogIds($blog);
        return Blog::find($blogIds);
    }
}
