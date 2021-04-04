@extends('layouts.frontend.app')
@section('content')
	<section class="shopping-cart spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<form action="{{ route('cart.update', ['cart' => '0']) }}" method="post">
						@method('patch')
						@csrf
						<div class="shopping__cart__table">
							<table>
								<thead>
									<tr>
										<th>Product</th>
										<th>Quantity</th>
										<th>Total</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($products as $product)
										@php
											$item = $cart[$product->id][0];
											$product->load('attributes');
											$attribute = $product->attributes
														->where('size_id', $item['size'])
														->where('color_id', $item['color'])
														->first()
										@endphp
										<tr>
											<td class="product__cart__item">
												<div class="product__cart__item__pic">
													<img src="{{ $attribute->images[0]->path }}" alt="">
												</div>
												<div class="product__cart__item__text">
													<h6>
														<a href="{{ route('product-details', ['product' => $product->id])  }}">
															{{ $product->name }}
														</a>
													</h6>
													<h5 id="price_after_discount">{{ money($product->after_discount) }}</h5>
													<div class="mt-2">
														<span class="font-weight-bold">Size: </span> {{ $attribute->size->name }}
													</div>
													<div class="mt-2">
														<span class="font-weight-bold">Color: </span> {{ $attribute->color->name }}
													</div>
												</div>
											</td>
											<td class="quantity__item">
												<div class="quantity">
													<div class="pro-qty-2">
														<input type="hidden" value="{{ $product->id }}" name="product_id[]" id="product_id">
														<input type="hidden" value="{{ $attribute->product_quantity }}" id="max_qty">
														<span class="fa fa-angle-left dec qtybtn decrease"></span>
														<input type="text" value="{{ $item['quantity'] }}" name="quantity[]" class="quantityValue">
														<span class="fa fa-angle-right inc qtybtn increase"></span>
													</div>
												</div>
											</td>
											<td class="cart__price">
												{{ money($product->after_discount * $item['quantity']) }}
											</td>
											<td class="cart__close">
												<button type="button" class="btn deleteBtn">
													<i class="fa fa-close"></i>
												</button>
											</td>
										</tr>
									@endforeach
								</tbody>
							</table>

						</div>
						<div class="row">
							<div class="col-lg-6 col-md-6 col-sm-6">
								<div class="continue__btn">
									<a href="{{ route('shop') }}">Continue Shopping</a>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6">
								<div class="continue__btn update__btn">
									<button id="updateBtn" @if (count($cart) == 0) disabled @endif>
										<i class="fa fa-spinner"></i> 
										Update cart
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="col-lg-4">
					<div class="cart__discount">
						<h6>Discount codes</h6>
						<form action="#">
							<input type="text" placeholder="Coupon code">
							<button type="submit">Apply</button>
						</form>
					</div>
					<div class="cart__total">
						<h6>Cart total</h6>
						<ul>
							<li>Total <span>{{ $total }} đ</span></li>
						</ul>
						<a href="{{ route('checkout.create') }}" class="primary-btn">Proceed to checkout</a>
					</div>
				</div>
			</div>
		</div>
	</section>
@endsection
