<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $guarded = [];

    public static function storeItem($product)
    {
        foreach (request('images') as $image) {
            $path = $image->store('product', 'public');
            $product->images()->create(['path' => "storage/".$path]);
        }
    }
    
    public static function deleteItem($product)
    {
        foreach ($product->images as $image) {
            delete_file($image->path);
            $image->delete();
        }
    }

    public static function updateItem($product)
    {
        if (request()->has('images')) {
            self::deleteProductImage($product);
            self::storeProductImage($product);
        }
    }
}
