@extends('layouts.backend.app')
@section('content')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Products</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active">Products</li>
            </ol>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card card-body">
            <h3 class="box-title m-b-0 mb-3">New Product</h3>
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <form action="{{ route('products.update', ['product' => $product->id]) }}" method="post" enctype="multipart/form-data">
                        @method('patch')
                        @csrf
                        <div class="form-group">
                            <label>Product Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" name="name" value="{{ $product->name }}">
                            @error('name') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Images</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" multiple class="custom-file-input" name="images[]">
                                    <label class="custom-file-label">Choose file</label>
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
                                    <input type="checkbox" class="custom-control-input" id="size{{ $size->id }}" value="{{ $size->id }}" 
                                    @if($product->sizes->contains('id', $size->id)) checked @endif name="sizes[]">
                                    <label class="custom-control-label" for="size{{ $size->id }}">{{ $size->name }}</label>
                                </div>
                            @endforeach
                            @error('sizes') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <h5 class="m-t-30">Select tags</h5>
                            @foreach ($tags as $tag)
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="tag{{ $tag->id }}" value="{{ $tag->id }}"
                                    @if($product->tags->contains('id', $tag->id)) checked @endif name="tags[]">
                                    <label class="custom-control-label" for="tag{{ $tag->id }}">{{ $tag->name }}</label>
                                </div>
                            @endforeach
                            @error('tags') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Product Price</label>
                            <input type="number" class="form-control" placeholder="Enter Name" name="price" value="{{ $product->price }}">
                            @error('price') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label>Product Quantity</label>
                            <input type="number" class="form-control" placeholder="Enter Name" name="quantity" value="{{ $product->quantity }}">
                            @error('quantity') 
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
