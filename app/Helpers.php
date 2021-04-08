<?php

use Illuminate\Support\Facades\Storage;

if (! function_exists("success")) {
    function success($nameRoute = "home", $message = "Operation successful")
    {
        session()->put("success", $message);
        return redirect()->route($nameRoute);
    }
}

if (! function_exists("delete_file")) {
    function delete_file($path)
    {
        Storage::delete(str_replace("storage", "public", $path));
    }
}

if (! function_exists("money")) {
    function money($money)
    {
        $amount = new \NumberFormatter("vi_VN", \NumberFormatter::CURRENCY);
        return $amount->format($money);
    }
}
