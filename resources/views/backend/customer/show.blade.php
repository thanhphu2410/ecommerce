@extends('layouts.backend.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h3 class="p-2">{{ $customer->name }}</h3>
                    <div class="row justify-content-md-center align-items-center">
                        <div class="round"> 
                            <img src="/{{ $customer->avatar }}" width="100" height="100">
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <h3 class="box-title m-t-40">General Info</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td width="390">Name</td>
                                            <td>{{ $customer->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{{ $customer->email }}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{{ $customer->phone }}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of birth</td>
                                            <td>{{ $customer->date_of_birth }} %</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{{ $customer->address }}</td>
                                        </tr>
                                        <tr>
                                            <td>Province</td>
                                            <td>{{ $customer->province->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>District</td>
                                            <td>{{ $customer->district->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Ward</td>
                                            <td>{{ $customer->ward->name }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
