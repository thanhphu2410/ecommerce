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
                        <a href="/shop">Shop</a>
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
            @if($total ?? 0 > 0) <form action="/order" method="POST" > @endif
                @csrf
                <div class="row edit-input-btn">
                    <div class="col-lg-8 col-md-6">
                        @if (!Auth::check())
                            <h6 class="coupon__code">
                                <i class="fa fa-tag"></i>
                                 Have an account? 
                                <a href="/login">Click here to login</a>
                            </h6>                            
                        @endif
                       
                        <h6 class="checkout__title">Billing Details</h6>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="checkout__input">
                                    <p>Full Name<span>*</span></p>
                                    <input type="text" placeholder="Full Name" required name="name" autocomplete="off"
                                    value="@if(Auth::check()) {{ Auth::user()->customer->name }} @endif">
                                </div>
                            </div>
                        </div>
                        <div class="checkout__input">
                            <p>Address<span>*</span></p>
                            <input type="text" placeholder="Your Address" class="checkout__input__add" required autocomplete="off" name="address"
                             value="@if(Auth::check()) {{ Auth::user()->customer->address }} @endif">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Phone<span>*</span></p>
                                    <input type="text" placeholder="Phone number" required name="phone" autocomplete="off"
                                    value="@if(Auth::check()) {{ Auth::user()->customer->phone }} @endif">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Email<span>*</span></p>
                                    <input type="email" placeholder="Email" required name="email" autocomplete="off"
                                    value="@if(Auth::check()) {{ Auth::user()->email }} @endif">
                                </div>
                            </div>
                        </div>
                    
                        <div class="checkout__input">
                            <p>Order notes</p>
                            <input type="text" name="notes" placeholder="Notes about your order, e.g. special notes for delivery.">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="checkout__order">
                            <h4 class="order__title">Your order</h4>
                            <div class="checkout__order__products">Product <span>Total</span></div>
                            <input type="hidden" name="price" value="{{ $total ?? '' }}">
                            <ul class="checkout__total__products">
                                @foreach ($products ?? [] as $index=>$item)
                                    <li>
                                        {{ $products[$index]->product_name }}({{ $quantity[$item->id][0] }})
                                        <span>{{ $item->price * $quantity[$item->id][0] }} vnd</span>
                                    </li>
                                @endforeach
                            </ul>
                            <ul class="checkout__total__all">
                                <li>Total <span>{{ $total ?? '' }} vnd</span></li>
                            </ul>
                            <p>* Pay when you receive the item
                            </p>
                            <button type="submit" class="site-btn">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            @if($total ?? 0 > 0) </form> @endif
        </div>
    </div>
</section>
@endsection
