<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function getDistrict(Province $province)
    {
        return response()->json($province->districts);
    }
    
    public function getWards(District $district)
    {
        return response()->json($district->wards);
    }
}
