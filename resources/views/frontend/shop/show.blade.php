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
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <span> - 5 Reviews</span>
                            </div>
                            <h3>{{ $product->price }} đ <span>70.00</span></h3>
                            <p>{{ $product->description }}</p>
                            <div class="product__details__option">
                                <div class="product__details__option__size">
                                    <span>Size:</span>
                                    @foreach ($product->sizes as $size)
                                        <label for="size{{ $size->id }}">
                                            {{ $size->name }} <input type="radio" id="size{{ $size->id }}">
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
                                        <span class="fa fa-angle-up dec qtybtn"></span>
                                        <input type="text" value="1">
                                        <span class="fa fa-angle-down inc qtybtn"></span>
                                    </div>
                                </div>
                                <a href="#" class="primary-btn">add to cart</a>
                            </div>
                            <div class="product__details__btns__option">
                                <a href="#"><i class="fa fa-heart"></i> add to wishlist</a>
                            </div>
                            <div class="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="img/shop-details/details-payment.png" alt="">
                                <ul>
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
                                                <img src="https://lh3.googleusercontent.com/a-/AOh14GjknvkuiHdyeEAHbSEulmzR8j3Hum167AIoZtTZtg=s192-c-rg-br100" alt="" width="50" class="mr-3">
                                                <a href="{{ route('login') }}" class="font-weight-bold" style="color: #9d9d9d">Login to reviews</a>
                                            </div>
                                        </div>
                                        @endguest
                                       
                                        @auth

                                        <div class="row p-3">
                                            <div class="row col-3 align-items-center">
                                               <img src="https://lh3.googleusercontent.com/a-/AOh14GjknvkuiHdyeEAHbSEulmzR8j3Hum167AIoZtTZtg=s192-c-rg-br100" alt="" width="50" class="mr-3">
                                               <a href="{{ route('login') }}" class="font-weight-bold" data-toggle="modal" data-target="#reviews" style="color: #9d9d9d">Click to reviews</a>
                                           </div>
                                        </div>

                                        <!-- Modal -->
                                        <div class="modal fade" id="reviews" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">{{ $product->name }}</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <form action="{{ route('review', ['product' => $product->id]) }}" method="post" enctype="multipart/form-data">
                                                        @csrf
                                                        @if ($errors->first())
                                                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                            {{ $errors->first() }}
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        @endif
                                                        <div class="modal-body">
                                                            <input type="hidden" name="product_id" value="{{ $product->id }}">
                                                            <input type="hidden" name="user_id" value="{{ Auth::id() }}">
                                                            <div class="page mb-3">
                                                                <div class="page__demo">
                                                                    <div class="page__group">
                                                                        <span class="page__hint">Reviews</span>
                                                                        <div class="rating">
                                                                            <input type="radio" name="rating" value="1"
                                                                                class="rating__control screen-reader" id="rc1" checked>
                                                                            <input type="radio" name="rating" value="2"
                                                                                class="rating__control screen-reader" id="rc2">
                                                                            <input type="radio" name="rating" value="3"
                                                                                class="rating__control screen-reader" id="rc3">
                                                                            <input type="radio" name="rating" value="4"
                                                                                class="rating__control screen-reader" id="rc4">
                                                                            <input type="radio" name="rating" value="5"
                                                                                class="rating__control screen-reader" id="rc5">
                                                                            <label for="rc1" class="rating__item">
                                                                                <svg class="rating__star">
                                                                                    <use xlink:href="#star"></use>
                                                                                </svg>
                                                                                <span class="screen-reader">1</span>
                                                                            </label>
                                                                            <label for="rc2" class="rating__item">
                                                                                <svg class="rating__star">
                                                                                    <use xlink:href="#star"></use>
                                                                                </svg>
                                                                                <span class="screen-reader">2</span>
                                                                            </label>
                                                                            <label for="rc3" class="rating__item">
                                                                                <svg class="rating__star">
                                                                                    <use xlink:href="#star"></use>
                                                                                </svg>
                                                                                <span class="screen-reader">3</span>
                                                                            </label>
                                                                            <label for="rc4" class="rating__item">
                                                                                <svg class="rating__star">
                                                                                    <use xlink:href="#star"></use>
                                                                                </svg>
                                                                                <span class="screen-reader">4</span>
                                                                            </label>
                                                                            <label for="rc5" class="rating__item">
                                                                                <svg class="rating__star">
                                                                                    <use xlink:href="#star"></use>
                                                                                </svg>
                                                                                <span class="screen-reader">5</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                @error('rating') 
                                                                    <div class="error text-center">{{ $message }}</div>
                                                                @enderror
                                                            </div>
                                                            
                                                            <div class="form-group">
                                                                <textarea class="form-control" rows="3" 
                                                                placeholder="Share your feedback, reviews about this product" name="body"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <div class="custom-file custom-file-review">
                                                                <input type="file" class="custom-file-input" id="imgInp" name="images[]" multiple>
                                                                <label class="custom-file-label">Choose Images</label>
                                                            </div>
                                                            <button type="submit" class="btn btn-success">Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        @endauth

                                        @foreach ($reviews as $review)
                                        <div class="row p-3 border-bottom">
                                            <div class="row col-3 align-items-start">
                                                <img src="https://lh3.googleusercontent.com/a-/AOh14GjknvkuiHdyeEAHbSEulmzR8j3Hum167AIoZtTZtg=s192-c-rg-br100" alt="" width="50" class="mr-3">
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
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="/{{ $product->first_image }}">
                                    <span class="label">New</span>
                                    <ul class="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""> <span>Compare</span></a>
                                        </li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6>Piqué Biker Jacket</h6>
                                    <a href="#" class="add-cart">+ Add To Cart</a>
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <h5>$67.24</h5>
                                    <div class="product__color__select">
                                        <label for="pc-1">
                                            <input type="radio" id="pc-1">
                                        </label>
                                        <label class="active black" for="pc-2">
                                            <input type="radio" id="pc-2">
                                        </label>
                                        <label class="grey" for="pc-3">
                                            <input type="radio" id="pc-3">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endsection
