<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }
    
    public function callback($provider)
    {
        $getInfo = Socialite::driver($provider)->user();
        $user = $this->createUser($getInfo);
        auth()->login($user);
        $url = url()->previous();
        if (strpos($url, 'login') !== false) {
            return redirect()->to('/');
        }
        return redirect()->to($url);
    }
    
    public function createUser($getInfo)
    {
        $user = User::where('email', $getInfo->email)->first();
        if (!$user) {
            $user = User::create([
                'name'     => $getInfo->name,
                'email'    => $getInfo->email,
                'avatar'   => $getInfo->avatar,
                'password' => Hash::make('123456'),
            ]);
        }
        return $user;
    }
}
