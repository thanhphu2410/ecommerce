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
									@foreach ($cart as $item)
										@php
											$item = $item[0];
											$product = $products[$loop->index]->load('sizes');
										@endphp
										<tr>
											<td class="product__cart__item">
												<div class="product__cart__item__pic">
													<img src="{{ $product->first_image }}" alt="">
												</div>
												<div class="product__cart__item__text">
													<h6>{{ $product->name }}</h6>
													<h5>{{ $product->after_discount }} đ</h5>
													<div class="mt-2">
														<span>Size:</span>
														@foreach ($product->sizes as $size)
															<div class="custom-control custom-radio custom-control-inline">
																<input type="hidden" value="{{ $size->quantity }}"
																	id="size_qty{{ $size->id }}">
																<input type="radio" id="size{{ $size->id }}"
																	name="size{{ $item['product_id'] }}" 
																	@if ($item['size'] == $size->id) checked @endif
																	class="custom-control-input size"
																	value="{{ $size->id }}">
																<label class="custom-control-label"
																	for="size{{ $size->id }}">{{ $size->name }}</label>
															</div>
														@endforeach
													</div>
												</div>
											</td>
											<td class="quantity__item">
												<div class="quantity">
													<div class="pro-qty-2">
														<input type="hidden" value="{{ $product->id }}"
															name="product_id[]" id="product_id">
														@foreach ($product->sizes as $size)
															@if ($item['size'] == $size->id)
																<input type="hidden" value="{{ $size->quantity }}" id="max_qty">
															@endif
														@endforeach
														<span class="fa fa-angle-left dec qtybtn" id="decrease"></span>
														<input type="text" value="{{ $item['quantity'] }}"
															name="quantity[]" id="quantity">
														<span class="fa fa-angle-right inc qtybtn" id="increase"></span>
													</div>
												</div>
											</td>
											<td class="cart__price">{{ $product->after_discount * $item['quantity'] }} đ
											</td>
											<td class="cart__close">
												<button id="deleteBtn" type="button" class="btn">
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
