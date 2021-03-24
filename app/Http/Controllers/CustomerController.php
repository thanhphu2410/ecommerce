<?php

namespace App\Http\Controllers;

use App\User;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = User::customer();
        return view('backend.customer.index', compact('customers'));
    }
}
