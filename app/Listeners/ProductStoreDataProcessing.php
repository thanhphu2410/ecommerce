<?php

namespace App\Listeners;

use App\Models\Product;
use App\Models\ProductImage;
use App\Events\ProductStoreEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProductStoreDataProcessing
{
    public function handle(ProductStoreEvent $event)
    {
        //delete "images", "sizes" key on $event->data for mass assignment
        unset($event->data['images'], $event->data['sizes']);
        
        $product = Product::create($event->data);
 
        ProductImage::storeProductImage($product);
         
        $product->sizes()->sync(request('sizes'));
    }
}
