<?php

namespace App\Http\Controllers;

use App\Models\Blog;

class NewsController extends Controller
{
    public function show(Blog $blog)
    {
        $blog->load('tags');
        $relatedPost = Blog::relatedPost($blog);
        return view('frontend.blog', compact('blog', 'relatedPost'));
    }

    public function loadMore($current, $next)
    {
        $blogs = Blog::latest()->offset($current)->limit($next)->get()->map(function ($blog) {
            $blog['created_date'] = $blog->created_at->format('d F Y');
            return $blog;
        });
        return response()->json($blogs);
    }
}
