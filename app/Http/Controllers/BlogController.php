<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogStoreRequest;
use App\Http\Requests\BlogUpdateRequest;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->paginate(10);
        return view('backend.blog.index', compact('blogs'));
    }

    public function create()
    {
        return view('backend.blog.create');
    }

    public function store(BlogStoreRequest $request)
    {
        Blog::create($request->validated());
        return success('blogs.index');
    }

    public function edit(Blog $blog)
    {
        return view('backend.blog.edit', compact('blog'));
    }

    public function update(BlogUpdateRequest $request, Blog $blog)
    {
        if (request()->has('image_path')) {
            delete_file($blog->image_path);
        }

        $blog->update($request->validated());
        
        return success('blogs.index');
    }

    public function destroy(Blog $blog)
    {
        delete_file($blog->image_path);
        
        $blog->delete();

        return success('blogs.index');
    }
}
