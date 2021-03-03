<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'LandingPageController@index');
Route::get('shop', 'ShopController@index')->name('shop');
Route::get('product-details/{product}', 'ShopController@show')->name('product_details');
Route::view('/checkout', 'frontend.checkout');
Route::view('/product', 'frontend.product_details');
Route::view('/cart', 'frontend.cart');
Route::view('/blog', 'frontend.blog');
Route::view('/dashboard', 'backend.index')->name('dashboard');
Route::resource('categories', 'CategoryController');
Route::resource('sub-categories', 'SubCategoryController');
Route::resource('products', 'ProductController');
Route::resource('sizes', 'SizeController');

Auth::routes();
