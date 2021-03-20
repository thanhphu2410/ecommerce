<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogTag;

class NewsController extends Controller
{
    public function show(Blog $blog)
    {
        $blog->load('tags');
        $relatedPost = Blog::relatedPost($blog);
        return view('frontend.blog', compact('blog', 'relatedPost'));
    }
}
