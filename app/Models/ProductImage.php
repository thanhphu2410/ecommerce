<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $guarded = [];

    public function storeProductImage($product)
    {
        foreach (request('images') as $image) {
            $path = $image->store('product', 'public');
            $product->images()->save(new ProductImage(['path' => "storage/".$path]));
        }
    }
    
    public function deleteProductImage($product)
    {
        foreach ($product->images as $image) {
            delete_file($image->path);
            $image->delete();
        }
    }
}
