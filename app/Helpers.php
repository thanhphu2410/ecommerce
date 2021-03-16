<?php

use Illuminate\Support\Facades\Storage;

if (! function_exists('success')) {
    function success($nameRoute = 'dashboard', $message = "Operation successful")
    {
        session()->put('success', $message);
        return redirect()->route($nameRoute);
    }
}

if (! function_exists('delete_file')) {
    function delete_file($path)
    {
        Storage::delete(str_replace('storage', 'public', $path));
    }
}
