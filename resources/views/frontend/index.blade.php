@extends('layouts.frontend.app')
@section('content')
<section class="hero">
    <div class="hero__slider owl-carousel">
        <div class="hero__items set-bg" data-setbg="{{ asset('images/background_1.jpg') }}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-7 col-md-8">
                        <div class="hero__text">
                            <h6>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.
                            </p>
                            <a href="#" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                            <div class="hero__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero__items set-bg" data-setbg="{{ asset('images/background_2.jpg') }}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-7 col-md-8">
                        <div class="hero__text">
                            <h6>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.
                            </p>
                            <a href="#" class="primary-btn">Shop now <span class="arrow_right"></span></a>
                            <div class="hero__social">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="banner spad">
    <div class="container">
        <div class="row">
            @php
                $classes = ["", "banner__item--middle", "banner__item--last"];
            @endphp
            @foreach ($categories as $index=>$item)
                <div class="col-lg-{{ $index == 1 ? 5 : 7}} @if($index == 0) offset-lg-4 @endif">
                    <div class="banner__item {{ $classes[$index] }}">
                        <div class="banner__item__pic">
                            <img width="450" height="450" src="{{ $item->image_path }}"/>
                        </div>
                        <div class="banner__item__text">
                            <h2>{{ $item->name }}</h2>
                            <a href="/product/search/?category_id={{ $item->id }}">Shop now</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="filter__controls">
                    <li class="active" data-filter="*">MIX</li>
                    <li data-filter=".best-seller">Best Sellers</li>
                    <li data-filter=".new-arrivals">New Arrivals</li>
                    <li data-filter=".hot-sales">Hot Sales</li>
                </ul>
            </div>
        </div>
        <div class="row product__filter">
            @foreach ($bestSellers as $product)
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix best-seller">
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
            
            @foreach ($newArrivals as $product)
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                <div class="product__item @if($product->discount > 0) sale @endif">
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

            @foreach ($hotSales as $product)
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
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
</section>
<section class="categories spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="categories__text">
                    <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="categories__hot__deal">
                    <img src="img/product-sale.png" alt="">
                    <div class="hot__deal__sticker">
                        <span>Sale Of</span>
                        <h5>$29.99</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1">
                <div class="categories__deal__countdown">
                    <span>Deal Of The Week</span>
                    <h2>Multi-pocket Chest Bag Black</h2>
                    <div class="categories__deal__countdown__timer" id="countdown">
                        <div class="cd-item">
                            <span>3</span>
                            <p>Days</p>
                        </div>
                        <div class="cd-item">
                            <span>1</span>
                            <p>Hours</p>
                        </div>
                        <div class="cd-item">
                            <span>50</span>
                            <p>Minutes</p>
                        </div>
                        <div class="cd-item">
                            <span>18</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <a href="#" class="primary-btn">Shop now</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="instagram spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="instagram__pic">
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-1.jpg"></div>
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-2.jpg"></div>
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-3.jpg"></div>
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-4.jpg"></div>
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-5.jpg"></div>
                    <div class="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-6.jpg"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="instagram__text">
                    <h2>Instagram</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <h3>#Male_Fashion</h3>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="latest spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <span>Latest News</span>
                </div>
            </div>
        </div>
        <div class="row justify-content-md-center" id="blog">
            <input type="hidden" value="{{ $blogs->count() }}" id="current_blogs">
            <input type="hidden" value="0" id="next_blogs">
            @foreach ($blogs as $blog)
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic set-bg" data-setbg="/{{ $blog->image_path }}"></div>
                    <div class="blog__item__text">
                        <span><i class="far fa-calendar"></i> {{ $blog->created_at->format('d F Y') }}</span>
                        <h5>{{ $blog->title }}</h5>
                        <a href="{{ route('blog-details', ['blog' => $blog->id]) }}">Read More</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        <div class="row justify-content-md-center">
            <button type="button" class="btn btn-outline-dark" id="loadmore">Load more</button>
        </div>
    </div>
</section>
@endsection

