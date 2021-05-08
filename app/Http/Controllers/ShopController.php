<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Color;
use App\Models\Product;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\ViewedProduct;
use App\Models\ProductAttribute;

class ShopController extends Controller
{
    public function index()
    {
        $products = $this->filter();
        $categories = Category::all();
        $subCategories = SubCategory::all();
        $sizes = Size::all();
        $colors = Color::all();
        return view('frontend.shop.index', compact('products', 'categories', 'sizes', 'subCategories', 'colors'));
    }

    public function show(Product $product)
    {
        //thêm vào sản phẩm đã xem cho user đã đăng nhâp
        ViewedProduct::view($product);
        
        //xứ lý problems n + 1
        $product->load(['attributes.images', 'reviews.images', 'sizes']);
        
        $relatedProducts = $product->related;
        $reviews = $product->reviews()->paginate(10);
        $ratingStar = round($reviews->average('rating'));
        
        //các sizes được lấy phải là duy nhất, tránh lỗi hiện thị các size trùng nhau
        $sizes = $product->sizes->unique('id');

        //lấy colors có quan hệ với thằng product và thằng sizes[0]
        //chọn thằng sizes[0] vì size[0] được chọn mặc định (dùng nó để lọc bớt các color được hiển thị)
        //các colors được lấy phải là duy nhất, tránh lỗi hiện thị các color trùng nhau
        $colors = ProductAttribute::where('product_id', $product->id)
                    ->where('size_id', $sizes[0]->id)
                    ->get()
                    ->unique('color_id');
        return view('frontend.shop.show', compact('product', 'relatedProducts', 'reviews', 'ratingStar', 'colors', 'sizes'));
    }

    //dùng để lọc sản phẩm theo category, giá,...
    public function filter()
    {
        $priceRange = [
            '0' => ['min' => 0, 'max' => 200],
            '1' => ['min' => 200, 'max' => 299],
            '2' => ['min' => 300, 'max' => 399],
            '3' => ['min' => 400, 'max' => 499],
            '4' => ['min' => 500, 'max' => 99999999999],
        ];

        $products = Product::query()->active();
        if (request('category')) {
            $subcategories = SubCategory::whereIn('category_id', explode(',', request('category')))->get()->modelKeys();
            $products->whereIn('sub_category_id', $subcategories);
        }

        if (request('subcategory')) {
            $products->whereIn('sub_category_id', explode(',', request('subcategory')));
        }

        if (request('price')) {
            $price = explode(',', request('price'));
            unset($price[count($price) - 1]);
            foreach ($price as $index=>$value) {
                $min = $priceRange[$value]['min'];
                $max = $priceRange[$value]['max'];
                if ($index > 0) {
                    $products->orWhereBetween('price', [$min, $max]);
                    continue;
                }
                $products->whereBetween('price', [$min, $max]);
            }
        }

        if (request('size')) {
            $productIds = ProductAttribute::whereIn('size_id', explode(',', request('size')))->pluck('product_id');
            $products->whereIn('id', $productIds);
        }

        if (request('color')) {
            $productIds = ProductAttribute::whereIn('color_id', explode(',', request('color')))->pluck('product_id');
            $products->whereIn('id', $productIds);
        }

        if (request('name')) {
            $products->where('name', 'LIKE', '%'.request('name').'%');
        }

        if (request('sale') == 'yes') {
            $products->where('discount', '>', 0);
        }

        return $products->orderBy('price', request('sortby', 'asc'))
                ->offset(request('offset', 0))
                ->limit(request('limit', 5))
                ->get();
    }
}
