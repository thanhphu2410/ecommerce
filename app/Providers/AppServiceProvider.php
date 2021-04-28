<?php

namespace App\Providers;

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
        // if ($this->app->environment() != 'production') {
        //     $parse = parse_url(config('app.url'));
        //     request()->headers->set('host', $parse['host']);
        // }
        
        view()->composer('layouts.frontend.app', function ($view) {
            $cart = session('cart', []);
            $amount = 0;
            foreach (session('cart', []) as $index=>$item) {
                foreach (session('cart.'.$index) as $key=>$value) {
                    $amount += $cart[$index][$key]['quantity'];
                }
            }
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
        view()->composer('layouts.backend.app', function ($view) {
            $view->with('current_user', auth()->user()->load('unreadNotifications'));
        });
    }
}
