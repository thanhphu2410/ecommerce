@extends('layouts.backend.app')
@section('content')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Products</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Home</a></li>
                <li class="breadcrumb-item active">Products</li>
            </ol>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card card-body">
            <h3 class="box-title m-b-0 mb-3">Edit Product</h3>
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <form action="{{ route('products.update', ['product' => $product->id]) }}" method="post" enctype="multipart/form-data">
                        @method('patch')
                        @csrf
                        <div class="form-group">
                            <label>Product Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" name="name" value="{{ $product->name }}" autocomplete="off">
                            @error('name') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Images</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" multiple class="custom-file-input" name="images[]" accept="image/*">
                                    <label class="custom-file-label">Choose images</label>
                                </div>
                            </div>
                            @error('images') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <h5 class="m-t-30">Select sizes</h5>
                            @foreach ($sizes as $size)
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input size" id="size{{ $size->id }}" value="{{ $size->id }}"
                                    @if($product->sizes->contains('id', $size->id)) checked @endif name="sizes[]">
                                    <label class="custom-control-label" for="size{{ $size->id }}">{{ $size->name }}</label>
                                </div>
                            @endforeach
                            @error('sizes') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <h5 class="m-t-30">Select Sub Category</h5>
                            @foreach ($subCategories as $subCategory)
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="subcategory{{ $subCategory->id }}" 
                                    value="{{ $subCategory->id }}" name="sub_category_id"
                                     @if($product->subcategory->id == $subCategory->id) checked @endif >
                                    <label class="custom-control-label" for="subcategory{{ $subCategory->id }}">{{ $subCategory->name }}</label>
                                </div>
                            @endforeach
                            @error('sub_category_id') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Product Price</label>
                            <input type="number" class="form-control" placeholder="Enter Price" name="price" value="{{ $product->price }}">
                            @error('price') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group" >
                            <label>Product Quantity</label>
                            <div id="quantity">
                                @foreach ($product->sizes as $size)
                                    <p class="mt-2" id="qty_label{{ $size->id }}">Quantity Size {{ $size->name }}</p>
                                    <input type="number" class="form-control" placeholder="Enter Quantity" 
                                    name="quantity[]" id="qty_input{{ $size->id }}" value="{{ $size->pivot->product_quantity }}">
                                @endforeach
                            </div>
                            @error('quantity') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Discount (%)</label>
                            <input type="number" class="form-control" placeholder="Enter Discount" name="discount" value="{{ $product->discount }}">
                            @error('discount') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Product Description</label>
                            <textarea class="form-control" name="description" rows="3">{{ $product->description }}</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-danger"> <i class="fa fa-pencil"></i> Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
