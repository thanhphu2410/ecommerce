@extends('layouts.frontend.app')
@section('content')
<section class="checkout spad">
    <div class="container">
        <div class="checkout__form">
            <form action="{{ url('edit-profile') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="row edit-input-btn">
                    <div class="col-lg-12 col-md-6">
                        <h6 class="checkout__title">Basic Information</h6>
                        <div class="row justify-content-md-center align-items-center">
                            <img src="/{{ $user->avatar }}" class="avatar" style="width: 100px; height: 100px">
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Avatar</p>
                                </div>
                                <div class="custom-file mb-3">
                                    <input type="file" class="custom-file-input" name="avatar">
                                    <label class="custom-file-label">Choose image</label>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Full Name <span>*</span></p>
                                    <input type="text" placeholder="Full Name" name="name" autocomplete="off"
                                    value="{{ $user->name }}">
                                    @error('name') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Date of birth </p>
                                    <input type="date" placeholder="Date of birth" name="date_of_birth" autocomplete="off"
                                    value="{{ $user->date_of_birth }}">
                                    @error('date_of_birth') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Gender </p>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="male" name="gender" class="custom-control-input" value="Male"
                                        @if($user->gender == 'Male') checked @endif>
                                        <label class="custom-control-label" for="male">Male</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="female" name="gender" class="custom-control-input" value="Female"
                                        @if($user->gender == 'Female') checked @endif>
                                        <label class="custom-control-label" for="female">Female</label>
                                    </div>
                                    @error('gender') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <h6 class="checkout__title">Contact Information</h6>

                        <div class="row justify-content-md-center align-items-center">
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Phone </p>
                                    <input type="text" placeholder="Phone number" name="phone" autocomplete="off"
                                    value="{{ $user->phone }}">
                                    @error('phone') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Email <span>*</span></p>
                                    <input type="text" placeholder="Email" name="email" autocomplete="off"
                                    value="@auth {{ $user->email }} @else {{ old('email') }} @endauth">
                                    @error('email') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Address </p>
                                    <input type="text" placeholder="Your Address" class="checkout__input__add" autocomplete="off" name="address"
                                     value="@auth {{ $user->address }} @else {{ old('address') }} @endauth">
                                    @error('address') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-12 custom-nice-select mb-5">
                                <div class="checkout__input">
                                    <p>Province</p>
                                    <select id="province" name="province_id">
                                        <option selected>Select province</option>
                                        @foreach ($provinces as $province)
                                            <option value="{{ $province->id }}" 
                                                @if($province->id == $user->province->id) selected @endif>
                                                {{ $province->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @error('province_id') 
                                        <div class="error error-nice-select">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 custom-nice-select">
                                <div class="checkout__input">
                                    <p>District</p>
                                    <select id="district" name="district_id">
                                        <option selected value="{{ $user->district->id ?? null}}">
                                            {{ $user->district->name ?? "Select district" }}
                                        </option>
                                    </select>
                                    @error('district_id') 
                                        <div class="error error-nice-select">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 custom-nice-select">
                                <div class="checkout__input">
                                    <p>Ward</p>
                                    <select id="ward" name="ward_id">
                                        <option selected value="{{ $user->ward->id ?? null }}">
                                            {{ $user->ward->name ?? "Select ward" }}
                                        </option>
                                    </select>
                                </div>
                                @error('ward_id') 
                                    <div class="error error-nice-select">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="site-btn mt-5">SAVE</button>
            </form>
        </div>
    </div>
</section>
@endsection
