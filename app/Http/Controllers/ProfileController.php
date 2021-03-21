<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Province;

class ProfileController extends Controller
{
    public function edit()
    {
        $user = auth()->user();
        $provinces = Province::all();
        return view('frontend.profile.edit', compact('user', 'provinces'));
    }

    public function update(ProfileUpdateRequest $request)
    {
        if (request()->has('avatar')) {
            delete_file(auth()->user()->avatar);
        }
        auth()->user()->update($request->validated());
        return back();
    }
}
