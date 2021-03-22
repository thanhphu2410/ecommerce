<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\SystemSetting;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('layouts.frontend.app', function ($view) {
            $cart = session('cart', []);
            $products = Product::find(array_keys($cart));
            $view->with('cart', $products->count());
        });

        view()->composer('layouts.*', function ($view) {
            if (session()->has('success')) {
                $view->with('success', session('success'));
                session()->forget('success');
            }
        });

        View::share('setting', SystemSetting::all()->first());
    }
}
