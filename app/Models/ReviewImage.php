<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReviewImage extends Model
{
    protected $guarded = [];

    public static function storeReviewImage($review, $images)
    {
        foreach ($images ?? [] as $image) {
            $path = $image->store('review', 'public');
            $review->images()->create(['path' => "storage/".$path]);
        }
    }
    
    public static function deleteItem($review)
    {
        $review->load('images');
        foreach ($review->images as $image) {
            delete_file($image->path);
            $image->delete();
        }
    }
}
