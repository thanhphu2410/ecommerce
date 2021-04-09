<?php

namespace App\Providers;

use App\Models\Product;
use App\Models\SubCategory;
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
            $amount = collect($cart)->sum(function ($item) {
                return $item[0]['quantity'];
            });
            $view->with('cart_amount', $amount);

            $subCategories = SubCategory::limit(3)->get();
            $view->with('sub_categories_footer', $subCategories);
        });

        view()->composer('layouts.*', function ($view) {
            if (session()->has('success')) {
                $view->with('success', session('success'));
                session()->forget('success');
            }

            if (session()->has('error')) {
                $view->with('error', session('error'));
                session()->forget('error');
            }
        });

        View::share('setting', SystemSetting::all()->first());
    }
}
