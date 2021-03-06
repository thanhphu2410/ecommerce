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
Route::post('review/{product}', 'ShopController@review')->name('review')->middleware('auth');
Route::view('/checkout', 'frontend.checkout');
Route::view('/product', 'frontend.product_details');
Route::view('/cart', 'frontend.cart');
Route::view('/blog', 'frontend.blog');

Route::view('/dashboard', 'backend.index')->name('dashboard');
Route::resource('categories', 'CategoryController');
Route::resource('sub-categories', 'SubCategoryController');
Route::resource('products', 'ProductController');
Route::resource('sizes', 'SizeController');
Route::resource('roles', 'RoleController');
Route::get('assign-roles/{role}', 'AssignRoleController@index')->name('assign-roles.index');
Route::post('assign-roles/{role}', 'AssignRoleController@store')->name('assign-roles.store');

Auth::routes();
