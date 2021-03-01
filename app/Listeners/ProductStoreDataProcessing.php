<?php

namespace App\Listeners;

use App\Models\Product;
use Facades\App\Models\ProductImage;
use App\Events\ProductStoreEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProductStoreDataProcessing
{
    public function handle(ProductStoreEvent $event)
    {
        //delete "images", "tags", "sizes" key on $event->data for mass assignment
        unset($event->data['tags'], $event->data['images'], $event->data['sizes']);
        
        $product = Product::create($event->data);
 
        ProductImage::storeProductImage($product);
         
        $product->tags()->sync(request('tags'));

        $product->sizes()->sync(request('sizes'));
    }
}
