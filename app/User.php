<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsToMany('App\Models\Role');
    }

    public function province()
    {
        return $this->belongsTo('App\Models\Province');
    }

    public function district()
    {
        return $this->belongsTo('App\Models\District');
    }

    public function ward()
    {
        return $this->belongsTo('App\Models\Ward');
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

    public function wishlist()
    {
        return $this->hasMany('App\Models\WishList');
    }

    public function orders()
    {
        return $this->hasMany('App\Models\Order');
    }

    public function isAdmin()
    {
        return $this->roles->pluck('name')->contains('Admin');
    }

    public function setAvatarAttribute()
    {
        if (request()->has('avatar')) {
            $path = request('avatar')->store('avatar', 'public');
            $this->attributes['avatar'] = "storage/".$path;
        }
    }
}
