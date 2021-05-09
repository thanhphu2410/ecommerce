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
        $user = $this->createUser($getInfo, $provider);
        auth()->login($user);
        return redirect()->to('/');
    }
    
    public function createUser($getInfo, $provider)
    {
        $user = User::where('email', $getInfo->email)->first();
        if (!$user) {
            $user = User::create([
                'name'     => $getInfo->name,
                'email'    => $getInfo->email,
                'avatar'   => $getInfo->avatar,
                'password' => Hash::make('123456'),
                // 'provider' => $provider,
                // 'provider_id' => $getInfo->id
            ]);
        }
        return $user;
    }
}
