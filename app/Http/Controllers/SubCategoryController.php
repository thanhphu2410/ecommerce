<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategoryRequest;
use App\Models\SubCategory;
use App\Models\Category;

class SubCategoryController extends Controller
{
    public function index()
    {
        $subCategories = SubCategory::all();
        return view('backend.sub-category.index', compact('subCategories'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('backend.sub-category.create', compact('categories'));
    }

    public function store(SubCategoryRequest $request)
    {
        $data = $request->validated();

        SubCategory::create($data);
        
        return success('sub-categories.index');
    }

    public function edit(SubCategory $subCategory)
    {
        $categories = Category::all();
        return view('backend.sub-category.edit', compact('subCategory', 'categories'));
    }

    public function update(SubCategoryRequest $request, SubCategory $subCategory)
    {
        $data = $request->validated();
        
        $subCategory->update($data);
        
        return success('sub-categories.index');
    }

    public function destroy(SubCategory $subCategory)
    {
        $subCategory->delete();
        return success('sub-categories.index');
    }
}
