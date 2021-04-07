<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;

class ContactController extends Controller
{
    public function index()
    {
        return view('frontend.contact');
    }

    public function store()
    {
        ContactMessage::create(request()->all());
        return back();
    }
}
