<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Product;
use App\Models\Category;
use Facades\App\Models\ProductImage;
use App\Events\ProductStoreEvent;
use App\Events\ProductUpdateEvent;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Models\Size;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('backend.product.index', compact('products'));
    }

    public function create()
    {
        $tags = Tag::all();
        $sizes = Size::all();
        return view('backend.product.create', compact('tags', 'sizes'));
    }

    public function store(ProductStoreRequest $request)
    {
        event(new ProductStoreEvent($request->validated()));

        return success('products.index');
    }

    public function edit(Product $product)
    {
        $tags = Tag::all();
        $sizes = Size::all();
        
        $product->load(['tags', 'sizes']);
        
        return view('backend.product.edit', compact('product', 'tags', 'sizes'));
    }

    public function update(ProductUpdateRequest $request, Product $product)
    {
        event(new ProductUpdateEvent($product, $request->validated()));

        return success('products.index');
    }

    public function destroy(Product $product)
    {
        ProductImage::deleteProductImage($product);

        $product->delete();
        
        return success('products.index');
    }
}
