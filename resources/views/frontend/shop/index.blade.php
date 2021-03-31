@extends('layouts.frontend.app')
@section('content')
<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Shop</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Home</a>
                        <i class="fa fa-caret-right mx-2" aria-hidden="true"></i>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="shop spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="shop__sidebar">
                    <div class="shop__sidebar__search">
                        <form action="#">
                            <input type="text" placeholder="Search...">
                            <button type="submit"><span class="icon_search"></span></button>
                        </form>
                    </div>
                    <div class="shop__sidebar__accordion">
                        <input type="hidden" id="filterUrl" value="/filter?category=&subcategory=&price=&size=">
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-heading">
                                    <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="shop__sidebar__categories">
                                            <ul class="nice-scroll">
                                                <input type="hidden" id="categorySelected">
                                                @foreach ($categories as $category)
                                                    @php
                                                        $requestCategory = explode(",", request('category'));
                                                    @endphp
                                                    <li class="category @if(in_array($category->id, $requestCategory)) active @endif">
                                                        <input type="hidden" value="{{ $category->id }}" id="category_id">
                                                        <span>{{ $category->name }}</span>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-heading">
                                    <a data-toggle="collapse" data-target="#collapseTwo">Sub-Categories</a>
                                </div>
                                <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="shop__sidebar__categories">
                                            <ul class="nice-scroll">
                                                <input type="hidden" id="subCategorySelected">
                                                @foreach ($subCategories as $subCategory)
                                                    <li class="sub-category">
                                                        <input type="hidden" value="{{ $subCategory->id }}" id="sub_category_id">
                                                        <span>{{ $subCategory->name }}</span>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-heading">
                                    <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                </div>
                                <div id="collapseThree" class="collapse show" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="shop__sidebar__price">
                                            <ul>
                                                <input type="hidden" id="priceSelected">
                                                <li class="price">
                                                    <input type="hidden" value="0" id="price">
                                                    <span>< 200$</span>
                                                </li>

                                                <li class="price">
                                                    <input type="hidden" value="1" id="price">
                                                    <span>200 - 299$</span>
                                                </li>

                                                <li class="price">
                                                    <input type="hidden" value="2" id="price">
                                                    <span>300 - 399$</span>
                                                </li>

                                                <li class="price">
                                                    <input type="hidden" value="3" id="price">
                                                    <span>400 - 499$</span>
                                                </li>

                                                <li class="price">
                                                    <input type="hidden" value="4" id="price">
                                                    <span> > 500$</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-heading">
                                    <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                </div>
                                <div id="collapseFour" class="collapse show" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="shop__sidebar__size">
                                            <input type="hidden" id="sizeSelected">
                                            @foreach ($sizes as $size)
                                            <label for="sz{{ $size->id }}">
                                                {{ $size->name }}
                                                <input class="size" type="radio" id="sz{{ $size->id }}" value="{{ $size->id }}">
                                            </label>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-heading">
                                    <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                </div>
                                <div id="collapseFive" class="collapse show" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div class="shop__sidebar__color">
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
                                            <label class="c-5" for="sp-5">
                                                <input type="radio" id="sp-5">
                                            </label>
                                            <label class="c-6" for="sp-6">
                                                <input type="radio" id="sp-6">
                                            </label>
                                            <label class="c-7" for="sp-7">
                                                <input type="radio" id="sp-7">
                                            </label>
                                            <label class="c-8" for="sp-8">
                                                <input type="radio" id="sp-8">
                                            </label>
                                            <label class="c-9" for="sp-9">
                                                <input type="radio" id="sp-9">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="shop__product__option">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="shop__product__option__left">
                                <p>Showing {{ $products->count() }} results</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="shop__product__option__right">
                                <p>Sort by Price:</p>
                                <select>
                                    <option value="">Low To High</option>
                                    <option value="">$0 - $55</option>
                                    <option value="">$55 - $100</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="products">
                    @foreach ($products as $product)
                    <div class="col-lg-4 col-md-6 col-sm-6">
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
                
                <div class="row">
                    <div class="col-lg-12">
                        {{ $products->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection