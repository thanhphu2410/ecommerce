{{-- @extends('layouts.frontend.app')

@section('content')
@if ($errors->first())
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    {{ $errors->first() }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
@endif
<section class="checkout spad register">
    <div class="container">
        <div class="checkout__form">
            <form action="{{ route('register') }}" method="POST">
                @csrf
                <div class="row edit-input-btn">
                    <div class="col-12">
                        <h6 class="checkout__title">REGISTER</h6>
                        <div class="row justify-content-md-center align-items-center">

                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Name <span>*</span></p>
                                    <input type="text" name="name" placeholder="Name"
                                        value="{{ old('name') }}" autocomplete="off">
                                    @error('name') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Email <span>*</span></p>
                                    <input type="email" name="email" placeholder="Email Address"
                                        value="{{ old('email') }}" autocomplete="off">
                                    @error('email') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Password <span>*</span></p>
                                    <input type="password" placeholder="Password" name="password" autocomplete="off">
                                    @error('password') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <button type="submit" class="site-btn mt-5">REGISTER</button>
            </form>
        </div>
    </div>
</section>
@endsection --}}


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon.svg') }}">
    <title>{{ $setting->site_title }}</title>
    <link href="{{ asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ asset('backend/dist/css/style.min.css') }}" rel="stylesheet">
</head>

<body class="skin-default card-no-border">
    <section id="wrapper">
        <div class="login-register" style="background-image:url({{ asset('images/login-register.jpg') }});">
            <div class="login-box card">
                <div class="card-body">
                    @if ($errors->first())
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        {{ $errors->first() }}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    @endif
                    <form action="{{ route('register') }}" class="form-horizontal form-material" id="loginform"
                        method="POST">
                        @csrf
                        <h3 class="box-title m-b-20">Sign Up</h3>
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" placeholder="Name" name="name"
                                    value="{{ old('name') }}" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="text" required="" placeholder="Email" name="email"
                                    value="{{ old('email') }}" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="password" required="" placeholder="Password"
                                    name="password" autocomplete="off">
                            </div>
                        </div>
                        <di class="form-group row">
                            <div class="col-md-12">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">
                                        I agree to all <a href="javascript:void(0)">Terms</a>
                                    </label>
                                </div>
                            </div>
                        </di>
                        <div class="form-group text-center p-b-20">
                            <div class="col-xs-12">
                                <button
                                    class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light"
                                    type="submit">Sign Up</button>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Already have an account?
                                <a href="{{ route('login') }}" class="text-info m-l-5">
                                    <b>Sign In</b>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.js') }}"></script>
</body>
</html>
