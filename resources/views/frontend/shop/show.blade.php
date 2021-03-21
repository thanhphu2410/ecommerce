@extends('layouts.frontend.app')
@section('content')
    <section class="shop-details">
        <div class="product__details__pic">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__breadcrumb">
                            <a href="/">Home</a>
                            <i class="fa fa-caret-right mx-2" aria-hidden="true"></i>
                            <a href="{{ route('shop') }}">Shop</a>
                            <i class="fa fa-caret-right mx-2" aria-hidden="true"></i>
                            <span>{{ $product->name }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <ul class="nav nav-tabs" role="tablist">
                            @foreach ($product->images as $image)
                                <li class="nav-item">
                                    <a class="nav-link @if ($loop->first) active @endif" data-toggle="tab" href="#tab{{ $image->id }}" role="tab">
                                        <div class="product__thumb__pic set-bg img-thumbnail"
                                            data-setbg="/{{ $image->path }}"></div>
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-9">
                        <div class="tab-content">
                            @foreach ($product->images as $image)
                                <div class="tab-pane @if ($loop->first) active @endif" id="tab{{ $image->id }}" role="tabpanel">
                                    <div class="product__details__pic__item">
                                        <img class="img-thumbnail" src="/{{ $image->path }}" alt="">
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product__details__content">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <div class="product__details__text">
                            <h4>{{ $product->name }}</h4>
                            <div class="rating">
                                @for ($i = 0; $i < $ratingStar; $i++)
                                <i class="fa fa-star"></i>
                                @endfor

                                @for ($i = 5; $i > $ratingStar; $i--)
                                <i class="fa fa-star-o"></i>
                                @endfor
                                <span> - {{ $reviews->count() }} Reviews</span>
                            </div>
                            <h3>
                                {{ money($product->after_discount) }}
                                @if($product->discount > 0)
                                <span>{{ money($product->price) }}</span>
                                @endif 
                            </h3>
                            <form action="{{ route('cart.store') }}" method="post">
                                @csrf
                                <div class="product__details__option">
                                    <div class="product__details__option__size">
                                        <span>Size:</span>
                                        @foreach ($product->sizes as $size)
                                            <label for="size{{ $size->id }}" @if($loop->first) class="active" @endif>
                                                {{ $size->name }} 
                                                <input type="radio" id="size{{ $size->id }}" value="{{ $size->id }}"
                                                name="size" @if($loop->first) checked @endif class="size">
                                                <input type="hidden" value="{{ $size->quantity }}" id="size_qty{{ $size->id }}">
                                            </label>
                                        @endforeach
                                    </div>
                                    <div class="product__details__option__color">
                                        <span>Color:</span>
                                        <label class="c-1" for="sp-1">
                                            <input type="radio" id="sp-1">
                                        </label>
                                        <label class="c-2" for="sp-2">
                                            <input type="radio" id="sp-2">
                                        </label>
                                        <label class="c-3" for="sp-3">
                                            <input type="radio" id="sp-3">
                                        </label>
                                        <label class="c-4" for="sp-4">
                                            <input type="radio" id="sp-4">
                                        </label>
                                        <label class="c-9" for="sp-9">
                                            <input type="radio" id="sp-9">
                                        </label>
                                    </div>
                                </div>
                                <div class="product__details__cart__option">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="hidden" value="{{ $product->id }}" name="product_id">
                                            <input type="hidden" value="{{ $product->sizes->first()->quantity }}" id="max_qty">
                                            <span class="fa fa-angle-up dec qtybtn" id="increase"></span>
                                            <input type="text" value="0" id="quantity" name="quantity">
                                            <span class="fa fa-angle-down inc qtybtn" id="decrease"></span>
                                        </div>
                                    </div>
                                    <button id="addToCartBtn" type="submit" class="primary-btn" disabled>add to cart</button>
                                </div>
                            </form>
                            <div class="product__details__btns__option">
                                <form action="{{ route('wishlist.store') }}" method="post">
                                    @csrf
                                    <input type="hidden" value="{{ $product->id }}" name="product_id">
                                    <button type="submit" class="wishlist">
                                        <i class="fa fa-heart"></i> add to wishlist
                                    </button>
                                </form>
                            </div>
                            <div class="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="img/shop-details/details-payment.png" alt="">
                                <ul>
                                    <li id="in_stock"><span>In stock:</span> {{ $product->sizes->first()->quantity }}</li>
                                    <li><span>Category:</span> {{ $product->category->name }}</li>
                                    <li><span>Sub Category:</span> {{ $product->subCategory->name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product__details__tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link " data-toggle="tab" href="#tabs-5" role="tab">Description</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tabs-6" role="tab">Customer Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional Information</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane" id="tabs-5" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        {{ $product->description }}
                                    </div>
                                </div>
                                <div class="tab-pane active" id="tabs-6" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <div class="row p-3">
                                            <button type="button" class="btn btn-primary button-reviews col-4">{{ $reviews->count() }} reviews</button>
                                        </div>

                                        @guest
                                        <div class="row p-3">
                                             <div class="row col-3 align-items-center">
                                                <img src="/storage/avatar/avatar-default.svg" alt="" width="50" class="mr-3">
                                                <a href="{{ route('login') }}" class="font-weight-bold" style="color: #9d9d9d">Login to reviews</a>
                                            </div>
                                        </div>
                                        @endguest
                                       
                                        @auth

                                        <div class="row p-3">
                                            <div class="row col-3 align-items-center">
                                               <img src="/{{ auth()->user()->avatar }}" alt="" width="50" class="mr-3 avatar">
                                               <a href="{{ route('login') }}" class="font-weight-bold" data-toggle="modal" data-target="#reviews" style="color: #9d9d9d">Click to reviews</a>
                                           </div>
                                        </div>

                                        <!-- Modal -->
                                        @include('frontend.modals.review')
                                            
                                        @endauth

                                        @foreach ($reviews as $review)
                                        <div class="row p-3 border-bottom">
                                            <div class="row col-3 align-items-start">
                                                <img src="/{{ $review->user->avatar }}" alt="" width="50" class="mr-3 avatar">
                                                <div>
                                                    <p class="font-weight-bold">{{ $review->user->name }}</p>
                                                    <p>Joined at {{ $review->user->created_at->format('d/m/Y') }}</p>
                                                </div>
                                            </div>
                                            <div class="col-9">
                                                <div class="rating mb-2">
                                                    @for ($i = 0; $i < $review->rating; $i++)
                                                    <i class="fa fa-star"></i>
                                                    @endfor

                                                    @for ($i = 5; $i > $review->rating; $i--)
                                                    <i class="fa fa-star-o"></i>
                                                    @endfor
                                                    <span> - Reviewed at {{ $review->updated_at->format('d/m/Y') }}</span>
                                                </div>
                                                <p>{{ $review->body }}</p>
                                                <div>
                                                    @foreach ($review->images as $image)
                                                        <img src="/{{ $image->path }}" width="120" height="120" class="image-review mr-2"> 
                                                    @endforeach
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                    </div>
                                </div>
                                <div class="tab-pane" id="tabs-7" role="tabpanel">
                                    <div class="product__details__tab__content">
                                        <p class="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                            pharetras loremos.
                                        </p>
                                        <div class="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                                a touchscreen and touchpad.
                                            </p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                                $350.00, a new Pocket PC can now be purchased.
                                            </p>
                                        </div>
                                        <div class="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                                worn all year round.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="related spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="related-title">Related Product</h3>
                </div>
            </div>
            <div class="row">
                <div id="owl-example" class="owl-carousel">
                    @foreach ($relatedProducts as $product)
                        <div class="col-12">
                            <div class="product__item sale">
                                <div class="product__item__pic set-bg" data-setbg="/{{ $product->first_image }}">
                                    @if($product->discount > 0)
                                        <span class="label">Sale</span>
                                    @endif
                                    <ul class="product__hover">
                                        <li>
                                            <form action="{{ route('wishlist.store') }}" method="post">
                                                @csrf
                                                <input type="hidden" value="{{ $product->id }}" name="product_id">
                                                <button type="submit" class="wishlist">
                                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                                </button>
                                            </form>
                                        </li>
                                        <li>
                                            <a href="{{ route('product-details', ['product' => $product->id])  }}">
                                            <button type="submit" class="wishlist">
                                                <i class="fa fa-search"></i>
                                            </button>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6>{{ $product->name }}</h6>
                                    <a href="{{ route('product-details', ['product' => $product->id])  }}" class="add-cart">+ Add To Cart</a>
                                    <div class="rating">
                                        @for ($i = 0; $i < $product->rating_star; $i++)
                                        <i class="fa fa-star"></i>
                                        @endfor
        
                                        @for ($i = 5; $i > $product->rating_star; $i--)
                                        <i class="fa fa-star-o"></i>
                                        @endfor
                                    </div>
                                    <h5 class="discount">
                                        {{ money($product->after_discount) }} 
                                        @if($product->discount > 0) <span>{{ money($product->price) }}</span> @endif
                                    </h5>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endsection
