<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Product;
use App\Models\SubCategory;
use App\Models\ProductImage;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use Illuminate\Support\Arr;

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
        $product = Product::create($this->getData($request));
 
        ProductImage::storeItem($product);
         
        $product->sizes()->attach(Size::getData());

        return success('products.index');
    }

    public function show(Product $product)
    {
        $product->load(['images', 'sizes', 'orders']);

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
        $product->update($this->getData($request));

        ProductImage::updateItem($product);
        
        $product->sizes()->sync(Size::getData());

        return success('products.index');
    }

    public function destroy(Product $product)
    {
        ProductImage::deleteItem($product);

        $product->delete();
        
        return success('products.index');
    }

    private function getData($request)
    {
        $validated = $request->validated();
        return Arr::except($validated, ['images', 'sizes', 'quantity']);
    }
}
