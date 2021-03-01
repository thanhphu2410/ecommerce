<?php

namespace App\Listeners;

use Facades\App\Models\ProductImage;
use App\Events\ProductUpdateEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ProductUpdateDataProcessing
{
    public function handle(ProductUpdateEvent $event)
    {
        //delete "tags" key on $event->data for mass update
        unset($event->data['tags'], $event->data['sizes']);

        $event->product->update($event->data);

        if (request()->has('images')) {
            ProductImage::deleteProductImage($event->product);
            ProductImage::storeProductImage($event->product);
        }
        
        $event->product->tags()->sync(request('tags'));

        $event->product->sizes()->sync(request('sizes'));
    }
}
