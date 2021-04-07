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
Route::resource('cart', 'CartController');
Route::resource('wishlist', 'WishListController');
Route::resource('checkout', 'CheckoutController');
Route::get('/', 'LandingPageController@index');
Route::get('shop', 'ShopController@index')->name('shop');
Route::get('product-details/{product}', 'ShopController@show')->name('product-details');
Route::get('districts/{province}', 'AddressController@getDistrict');
Route::get('wards/{district}', 'AddressController@getWards');
Route::get('all-blogs', 'NewsController@index');
Route::get('blog-details/{blog}', 'NewsController@show')->name('blog-details');
Route::get('filter', 'ShopController@filter');
Route::get('get-colors/{product}/{size}', 'ShopController@getColor');
Route::get('contact', 'ContactController@index');
Route::post('contact', 'ContactController@store');

Route::middleware(['auth'])->group(function () {
    Route::post('review/{product}', 'ProductReviewController')->name('review');
    Route::get('edit-profile', 'ProfileController@editProfile');
    Route::post('edit-profile', 'ProfileController@updateProfile');
    Route::get('edit-password', 'ProfileController@editPassword');
    Route::post('edit-password', 'ProfileController@updatePassword');
});

/* *************Back End************* */
Route::middleware(['auth', 'isStaff'])->group(function () {
    Route::get('products/attributes', 'ProductController@getAttributes');
    Route::resource('categories', 'CategoryController');
    Route::resource('sub-categories', 'SubCategoryController');
    Route::resource('products', 'ProductController');
    Route::resource('sizes', 'SizeController');
    Route::resource('colors', 'ColorController');
    Route::resource('roles', 'RoleController');
    Route::resource('orders', 'OrderController');
    Route::resource('customers', 'CustomerController');
    Route::resource('tags', 'TagController');
    Route::resource('blogs', 'BlogController');
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('assign-roles/{role}', 'AssignRoleController@index')->name('assign-roles.index');
    Route::post('assign-roles/{role}', 'AssignRoleController@store')->name('assign-roles.store');
    Route::get('system-setting', 'SystemSettingController@edit')->name('system-setting.edit');
    Route::post('system-setting', 'SystemSettingController@update')->name('system-setting.update');
});
Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
