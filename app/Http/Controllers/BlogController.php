<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Blog;
use Illuminate\Support\Arr;
use App\Http\Requests\BlogStoreRequest;
use App\Http\Requests\BlogUpdateRequest;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->paginate(10);
        return view('backend.blog.index', compact('blogs'));
    }

    public function create()
    {
        $tags = Tag::all();
        return view('backend.blog.create', compact('tags'));
    }

    public function store(BlogStoreRequest $request)
    {
        $blog = Blog::create($this->getData($request));
        $blog->tags()->attach($request->tags);
        return success('blogs.index');
    }

    public function edit(Blog $blog)
    {
        $tags = Tag::all();
        $blog->load('tags');
        return view('backend.blog.edit', compact('blog', 'tags'));
    }

    public function update(BlogUpdateRequest $request, Blog $blog)
    {
        if (request()->has('image_path')) {
            delete_file($blog->image_path);
        }

        $blog->update($this->getData($request));
        $blog->tags()->sync($request->tags);
        return success('blogs.index');
    }

    public function destroy(Blog $blog)
    {
        delete_file($blog->image_path);
        $blog->delete();
        return success('blogs.index');
    }

    private function getData($request)
    {
        $validated = $request->validated();
        return Arr::except($validated, 'tags');
    }
}
