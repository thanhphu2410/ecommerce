<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view('backend.category.index', compact('categories'));
    }

    public function create()
    {
        return view('backend.category.create');
    }

    public function store(CategoryStoreRequest $request)
    {
        // assign image path to $data for mass assignment
        $data = $this->assignImagePath($request->validated());
        
        Category::create($data);

        return success('categories.index');
    }

    public function edit(Category $category)
    {
        return view('backend.category.edit', compact('category'));
    }

    public function update(CategoryUpdateRequest $request, Category $category)
    {
        if (request()->has('image_path')) {
            delete_file($category->image_path);
        }

        $data = $this->assignImagePath($request->validated());

        $category->update($data);
        
        return success('categories.index');
    }

    public function destroy(Category $category)
    {
        delete_file($category->image_path);

        $category->delete();

        return success('categories.index');
    }

    private function assignImagePath($data)
    {
        if (request()->has('image_path')) {
            $path = request('image_path')->store('category', 'public');
            $data['image_path'] = "storage/".$path;
        }
        return $data;
    }
}
