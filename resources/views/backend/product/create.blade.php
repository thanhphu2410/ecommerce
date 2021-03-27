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
            <h3 class="box-title m-b-0 mb-3">New Product</h3>
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <form action="{{ route('products.store') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label>Product Name</label>
                            <input type="text" class="form-control" placeholder="Enter Name" name="name" value="{{ old('name') }}" autocomplete="off">
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
                            @if ($errors->any())
                                <div class="error">Please choose images again</div>
                            @endif
                        </div>

                        <div>
                            <label class="mb-3">Product Attributes</label>
                            <button type="button" class="btn btn-info btn-sm" id="addAttribute">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                        @if (count(old('sizes') ?? []) > 0)
                            <div id="attributeWrapper">
                                <input type="hidden" value="1" id="currentAttribute">
                                <input type="hidden" value="{{ $sizes->count() }}" id="maxOfAttribute">
                                @foreach (old('sizes') as $item)
                                <div class="row align-items-center" id="attribute">
                                    <div class="form-group col-5">
                                        <label>Select sizes</label>
                                        <select class="custom-select" name="sizes[]">
                                            <option selected value="">Sizes</option>
                                            @foreach ($sizes as $size)
                                                <option value="{{ $size->id }}" @if ($size->id == $item) selected @endif>
                                                    {{ $size->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="form-group col-5">
                                        <label>Product Quantity</label>
                                        <input type="number" class="form-control" placeholder="Enter Quantity" 
                                        name="quantity[]" value="{{ old('quantity.'.$loop->index) }}">
                                    </div>

                                    <div class="col-2">
                                        <button type="button" class="btn btn-dark deleteAttribute">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                @endforeach
                                
                                @error('sizes.*') 
                                    <div class="error">The size field is required.</div>
                                @enderror
                                @error('quantity.*') 
                                    <div class="error">The quantity field is required.</div>
                                @enderror
                            </div>
                        @else
                            <div id="attributeWrapper">
                                <input type="hidden" value="1" id="currentAttribute">
                                <input type="hidden" value="{{ $sizes->count() }}" id="maxOfAttribute">
                                <div class="row align-items-center" id="attribute">
                                    <div class="form-group col-5">
                                        <label>Select sizes</label>
                                        <select class="custom-select" name="sizes[]">
                                            <option selected value="">Sizes</option>
                                            @foreach ($sizes as $size)
                                                <option value="{{ $size->id }}">{{ $size->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="form-group col-5">
                                        <label>Product Quantity</label>
                                        <input type="number" class="form-control" placeholder="Enter Quantity" name="quantity[]" value="">
                                    </div>

                                    <div class="col-2">
                                        <button type="button" class="btn btn-dark deleteAttribute">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                @error('sizes.*') 
                                    <div class="error">The size field is required.</div>
                                @enderror
                                @error('quantity.*') 
                                    <div class="error">The quantity field is required.</div>
                                @enderror
                            </div>
                        @endif

                        <div class="form-group">
                            <h5 class="m-t-30">Select Sub Category</h5>
                            <select class="custom-select" name="sub_category_id">
                                <option selected value="">Select sub-category</option>
                                @foreach ($subCategories as $subCategory)
                                    <option value="{{ $subCategory->id }}" @if ($subCategory->id == old('sub_category_id')) selected @endif>
                                        {{ $subCategory->name }}
                                    </option>
                                @endforeach
                            </select>
                            @error('sub_category_id') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group">
                            <label>Product Price</label>
                            <input type="number" class="form-control" placeholder="Enter Price" name="price" value="{{ old('price') }}">
                            @error('price') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Discount (%)</label>
                            <input type="number" class="form-control" placeholder="Enter Discount" name="discount" value="{{ old('discount') ?: 0 }}">
                            @error('discount') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Product Description</label>
                            <textarea class="form-control" name="description" rows="3">{{ old('description') }}</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
