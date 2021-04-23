@extends('layouts.frontend.app')
@section('content')
    @if ($errors->first())
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ $errors->first() }}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    @endif

    <section class="checkout spad login">
        <div class="container">
            <div class="checkout__form">
                <form action="{{ route('login') }}" method="POST">
                    @csrf
                    <div class="row edit-input-btn">
                        <div class="col-lg-12 col-md-6">
                            <h6 class="checkout__title">LOGIN</h6>
                            <div class="row justify-content-md-center align-items-center">
    
                                <div class="col-lg-12">
                                    <div class="checkout__input">
                                        <p>Email <span>*</span></p>
                                        <input type="email" name="email" placeholder="Email Address"
                                            value="{{ old('email') }}" autocomplete="off" id="login_email">
                                        @error('email') 
                                            <div class="error">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
    
                                <div class="col-lg-12">
                                    <div class="checkout__input">
                                        <p>Password <span>*</span></p>
                                        <input type="password" placeholder="Password" name="password" autocomplete="off" id="login_password">
                                        @error('password') 
                                            <div class="error">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="site-btn mt-5">LOGIN</button>
                    <button type="button" class="site-btn mt-5 register-btn" id="login_admin">
                        CONTINUE AS ADMIN
                    </button>
                </form>
            </div>
        </div>
    </section>
@endsection
