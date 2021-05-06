<?php

use Illuminate\Support\Facades\File;

if (! function_exists('success')) {
    function success($nameRoute = 'home', $message = 'Operation successful')
    {
        session()->put('success', $message);
        return redirect()->route($nameRoute);
    }
}

if (! function_exists('error')) {
    function error($nameRoute = 'home', $message = 'Operation failed')
    {
        session()->put('error', $message);
        return redirect()->route($nameRoute);
    }
}

if (! function_exists('delete_file')) {
    function delete_file($path)
    {
        File::delete($path);
    }
}

if (! function_exists('store_file')) {
    function store_file($image, $folder)
    {
        return $image->store("uploads/$folder", 'public');
    }
}

if (! function_exists('money')) {
    function money($money)
    {
        return '$' . number_format($money, 2, '.', '.');
    }
}
