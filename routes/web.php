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
/* *************Front End************* */
Route::get('/', 'LandingPageController@index');
Route::get('shop', 'ShopController@index')->name('shop');
Route::get('product-details/{product}', 'ShopController@show')->name('product-details');
Route::post('review/{product}', 'ShopController@review')->name('review')->middleware('auth');
Route::resource('cart', 'CartController');
Route::resource('wishlist', 'WishListController');
Route::resource('checkout', 'CheckoutController');
Route::get('districts/{province}', 'AddressController@getDistrict');
Route::get('wards/{district}', 'AddressController@getWards');
Route::view('/blog', 'frontend.blog');

/* *************Back End************* */
Route::view('/dashboard', 'backend.index')->name('dashboard');
Route::resource('categories', 'CategoryController');
Route::resource('sub-categories', 'SubCategoryController');
Route::resource('products', 'ProductController');
Route::resource('sizes', 'SizeController');
Route::resource('roles', 'RoleController');
Route::resource('assign-roles', 'AssignRoleController');
Route::resource('orders', 'OrderController');
Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
