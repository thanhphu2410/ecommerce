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
    <section class="m-5" style="min-height: 430px;">
        <div class="container">
            <div class="row edit-input-btn">
                <div class="col-sm-6 col-sm-offset-1">
                    <div class="login-form">
                        <h4 class="text-center">LOGIN</h4>
                        <form method="POST" action="{{ route('login') }}" class="mt-4">
                            @csrf
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Email Address" class="form-control"
                                    value="{{ old('name') }}" required autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" placeholder="Password" class="form-control" required>
                            </div>
                            <button class="btn btn-outline-dark" style="width: 100%" type="submit">Login</button>
                        </form>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="signup-form">
                        <h4 class="text-center">SINGUP</h4>
                        <form method="POST" action="{{ route('register') }}" class="mt-4" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <input type="text" name="name" placeholder="Name" class="form-control"
                                    value="{{ old('name') }}" required autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Email Address" class="form-control"
                                    value="{{ old('email') }}" required autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="text" name="phone" placeholder="Phone Number" class="form-control"
                                    value="{{ old('phone') }}" required autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="text" name="address" placeholder="Address" class="form-control"
                                    value="{{ old('address') }}" required autocomplete="off">
                            </div>
                            <div class="custom-file mb-3">
                                <input type="file" class="custom-file-input" name="avatar">
                                <label class="custom-file-label">Choose file</label>
                              </div>
                            <div class="form-group">
                                <input type="password" name="password" placeholder="Password" class="form-control"
                                    value="{{ old('password') }}" required>
                            </div>
                            <button class="btn btn-outline-dark" style="width: 100%" type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
