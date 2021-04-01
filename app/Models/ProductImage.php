<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $guarded = [];

    public static function storeItem($attributes)
    {
        foreach ($attributes as $index=>$attribute) {
            foreach (request('images'.$index, []) as $image) {
                $path = $image->store('product', 'public');
                $attribute->images()->create(['path' => "storage/".$path]);
            }
        }
    }
    
    public static function deleteItem($attribute)
    {
        foreach ($attribute->images as $image) {
            delete_file($image->path);
        }
    }

    public static function updateItem($attributes)
    {
        foreach ($attributes as $index=>$attribute) {
            $old_images = request('old_images'.$index, []);
            if (!request('images'.$index)) {
                foreach ($old_images as $image) {
                    $attribute->images()->create(['path' => "storage/".$image]);
                }
                continue;
            }

            foreach ($old_images as $image) {
                delete_file($image);
            }
            self::storeItem($attributes);
        }
    }
}
