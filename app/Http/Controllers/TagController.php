<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagRequest;
use App\Models\Tag;
use App\Models\Category;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        return view('backend.tag.index', compact('tags'));
    }

    public function create()
    {
        $categories = Category::all();
        return view('backend.tag.create', compact('categories'));
    }

    public function store(TagRequest $request)
    {
        $data = $request->validated();

        Tag::create($data);
        
        return success('tags.index');
    }

    public function edit(Tag $tag)
    {
        $categories = Category::all();
        return view('backend.tag.edit', compact('tag', 'categories'));
    }

    public function update(TagRequest $request, Tag $tag)
    {
        $data = $request->validated();

        $tag->update($data);
        
        return success('tags.index');
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        
        return success('tags.index');
    }
}
