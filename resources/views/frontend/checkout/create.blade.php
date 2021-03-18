@extends('layouts.frontend.app')
@section('content')
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Check Out</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Home</a>
                        <i class="fa fa-caret-right mx-2" aria-hidden="true"></i>
                        <span>Check Out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="checkout spad">
    <div class="container">
        <div class="checkout__form">
            <form action="{{ route('checkout.store') }}" method="POST" >
                @csrf
                <input type="hidden" value="{{ auth()->id() }}" name="user_id">
                <input type="hidden" value="{{ $total }}" name="price">
                <div class="row edit-input-btn">
                    <div class="col-lg-8 col-md-6">
                        @guest
                            <h6 class="coupon__code">
                                <i class="fa fa-tag"></i>
                                 Have an account? 
                                <a href="{{ route('login') }}">Click here to login</a>
                            </h6>                            
                        @endguest
                       
                        <h6 class="checkout__title">Billing Details</h6>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Full Name<span>*</span></p>
                                    <input type="text" placeholder="Full Name" name="customer_name" autocomplete="off"
                                    value="@auth {{ auth()->user()->name }} @else {{ old('customer_name') }} @endauth">
                                    @error('customer_name') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Phone<span>*</span></p>
                                    <input type="text" placeholder="Phone number" required name="customer_phone" autocomplete="off"
                                    value="@auth {{ auth()->user()->customer->phone }} @else {{ old('customer_phone') }} @endauth">
                                    @error('customer_phone') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Email<span>*</span></p>
                                    <input type="text" placeholder="Email" name="customer_email" autocomplete="off"
                                    value="@auth {{ auth()->user()->email }} @else {{ old('customer_email') }} @endauth">
                                    @error('customer_email') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Order notes</p>
                                    <input type="text" name="notes" value="{{ old('notes') }}" placeholder="Notes about your order, e.g. special notes for delivery.">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input type="text" placeholder="Your Address" class="checkout__input__add" autocomplete="off" name="customer_address"
                                     value="@auth {{ auth()->user()->customer->address }} @else {{ old('customer_address') }} @endauth">
                                    @error('customer_address') 
                                        <div class="error">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-12 custom-nice-select mb-5">
                                <div class="checkout__input">
                                    <p>Province<span>*</span></p>
                                    <select id="province" name="province_id">
                                        <option @auth value="" @endauth selected>Select province</option>
                                        @foreach ($provinces as $province)
                                            <option value="{{ $province->id }}">{{ $province->name }}</option>
                                        @endforeach
                                    </select>
                                    @error('province_id') 
                                        <div class="error error-nice-select">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 custom-nice-select">
                                <div class="checkout__input">
                                    <p>District<span>*</span></p>
                                    <select id="district" name="district_id">
                                        <option selected>Select district</option>
                                    </select>
                                    @error('district_id') 
                                        <div class="error error-nice-select">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 custom-nice-select">
                                <div class="checkout__input">
                                    <p>Ward<span>*</span></p>
                                    <select id="ward" name="ward_id">
                                        <option selected>Select ward</option>
                                    </select>
                                   
                                </div>
                                @error('ward_id') 
                                    <div class="error error-nice-select">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="checkout__order">
                            <h4 class="order__title">Your order</h4>
                            <div class="checkout__order__products font-weight-bold">Product <span>Total</span></div>
                            <ul class="checkout__total__products">
                                @foreach ($products as $product)
                                @php
                                    $item = $cart[$product->id][0];
                                @endphp
                                <input type="hidden" name="size_id[]" value="{{ $item['size'] }}">
                                <input type="hidden" name="product_id[]" value="{{ $item['product_id'] }}">
                                <input type="hidden" name="quantity[]" value="{{ $item['quantity'] }}">
                                <input type="hidden" name="total[]" value="{{ $product->after_discount * $item['quantity'] }}">
                                <li>
                                    {{ $product->name }} &nbsp; x{{ $item['quantity'] }}
                                    <span>{{ $product->after_discount * $item['quantity'] }} đ</span>
                                </li>
                                @endforeach
                            </ul>
                            <ul class="checkout__total__all">
                                <li>Total <span>{{ $total }} vnd</span></li>
                            </ul>
                            <p>* Pay when you receive the item
                            </p>
                            <button @if($products->count() == 0) disabled @endif type="submit" class="site-btn">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
@endsection
