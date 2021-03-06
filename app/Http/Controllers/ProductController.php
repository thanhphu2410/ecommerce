<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Product;
use App\Models\SubCategory;
use App\Events\ProductStoreEvent;
use App\Events\ProductUpdateEvent;
use App\Models\ProductImage;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('backend.product.index', compact('products'));
    }

    public function create()
    {
        $subCategories = SubCategory::all();
        $sizes = Size::all();
        return view('backend.product.create', compact('subCategories', 'sizes'));
    }

    public function store(ProductStoreRequest $request)
    {
        event(new ProductStoreEvent($request->validated()));

        return success('products.index');
    }

    public function show(Product $product)
    {
        $product->load(['images', 'sizes']);

        return view('backend.product.show', compact('product'));
    }

    public function edit(Product $product)
    {
        $subCategories = SubCategory::all();
        $sizes = Size::all();

        $product->load('sizes');
        
        return view('backend.product.edit', compact('product', 'subCategories', 'sizes'));
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
