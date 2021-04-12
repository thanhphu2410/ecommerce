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
                                            <td>{{ $customer->date_of_birth }}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{{ $customer->address }}</td>
                                        </tr>
                                        <tr>
                                            <td>Province</td>
                                            <td>{{ $customer->province->name ?? '' }}</td>
                                        </tr>
                                        <tr>
                                            <td>District</td>
                                            <td>{{ $customer->district->name ?? '' }}</td>
                                        </tr>
                                        <tr>
                                            <td>Ward</td>
                                            <td>{{ $customer->ward->name ?? '' }}</td>
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
    <div class="row">
        <!-- Column -->
        <div class="col-lg-4 col-xlg-3 col-md-5">
            <div class="card"> <img class="card-img" src="{{ asset('/images/socialbg.jpeg') }}" height="456" alt="Card image">
                <div class="card-img-overlay card-inverse text-white social-profile d-flex justify-content-center">
                    <div class="align-self-center"> <img src="/{{ $customer->avatar }}" class="customer-avatar" width="100">
                        <h4 class="card-title">{{ $customer->name }}</h4>
                        <h6 class="card-subtitle">{{ $customer->email }}</h6>
                        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body"> 
                    <small class="text-muted">Email address </small>
                    <h6>{{ $customer->email }}</h6> 
                    <small class="text-muted p-t-30 db">Phone</small>
                    <h6>{{ $customer->phone }}</h6> 
                    <small class="text-muted p-t-30 db">Address</small>
                    <h6>{{ $customer->address }}</h6>
                    <small class="text-muted p-t-30 db">Province</small>
                    <h6>{{ $customer->province->name ?? '' }}</h6>
                    <small class="text-muted p-t-30 db">District</small>
                    <h6>{{ $customer->district->name ?? ''}}</h6>
                    <small class="text-muted p-t-30 db">Ward</small>
                    <h6>{{ $customer->ward->name ?? ''}}</h6>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-xlg-9 col-md-7">
            <div class="card">
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Timeline</a> </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel">
                        <div class="card-body">
                            <div class="profiletimeline">
                                <div class="sl-item">
                                    <div class="sl-left"> <img src="../assets/images/users/1.jpg" alt="user" class="img-circle" /> </div>
                                    <div class="sl-right">
                                        <div><a href="javascript:void(0)" class="link">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                            <p>assign a new task <a href="javascript:void(0)"> Design weblayout</a></p>
                                            <div class="row">
                                                <div class="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img1.jpg" class="img-responsive radius" /></div>
                                                <div class="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img2.jpg" class="img-responsive radius" /></div>
                                                <div class="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img3.jpg" class="img-responsive radius" /></div>
                                                <div class="col-lg-3 col-md-6 m-b-20"><img src="../assets/images/big/img4.jpg" class="img-responsive radius" /></div>
                                            </div>
                                            <div class="like-comm"> <a href="javascript:void(0)" class="link m-r-10">2 comment</a> <a href="javascript:void(0)" class="link m-r-10"><i class="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="sl-item">
                                    <div class="sl-left"> <img src="../assets/images/users/2.jpg" alt="user" class="img-circle" /> </div>
                                    <div class="sl-right">
                                        <div> <a href="javascript:void(0)" class="link">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                            <div class="m-t-20 row">
                                                <div class="col-md-3 col-xs-12"><img src="../assets/images/big/img1.jpg" alt="user" class="img-responsive radius" /></div>
                                                <div class="col-md-9 col-xs-12">
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </p> <a href="javascript:void(0)" class="btn btn-success"> Design weblayout</a></div>
                                            </div>
                                            <div class="like-comm m-t-20"> <a href="javascript:void(0)" class="link m-r-10">2 comment</a> <a href="javascript:void(0)" class="link m-r-10"><i class="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="sl-item">
                                    <div class="sl-left"> <img src="../assets/images/users/3.jpg" alt="user" class="img-circle" /> </div>
                                    <div class="sl-right">
                                        <div><a href="javascript:void(0)" class="link">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                            <p class="m-t-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p>
                                        </div>
                                        <div class="like-comm m-t-20"> <a href="javascript:void(0)" class="link m-r-10">2 comment</a> <a href="javascript:void(0)" class="link m-r-10"><i class="fa fa-heart text-danger"></i> 5 Love</a> </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="sl-item">
                                    <div class="sl-left"> <img src="../assets/images/users/4.jpg" alt="user" class="img-circle" /> </div>
                                    <div class="sl-right">
                                        <div><a href="javascript:void(0)" class="link">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                            <blockquote class="m-t-10">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
