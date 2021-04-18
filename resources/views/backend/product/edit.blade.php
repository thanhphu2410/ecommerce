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
                            <input type="text" class="form-control" placeholder="Enter Name" name="name" 
                            value="{{ old('name', $product->name) }}" autocomplete="off">
                            @error('name') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div>
                            <label class="mb-3">Product Attributes</label>
                            <button type="button" class="btn btn-info btn-sm" id="addAttribute">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>

                        <input type="hidden" value="{{ $product->attributes->count() }}" id="currentAttribute">
                        <input type="hidden" value="{{ $sizes->count() * $colors->count() }}" id="maxOfAttribute">

                        @if (count(old('sizes') ?? []) > 0)
                            <div id="attributeWrapper">
                                @foreach (old('sizes') as $index=>$item)
                                <div class="row align-items-center" id="attribute">
                                    <div class="col-10 row">
                                        <div class="form-group col-6">
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

                                        <div class="form-group col-6">
                                            <label>Product Quantity</label>
                                            <input type="number" class="form-control" placeholder="Enter Quantity" 
                                            name="quantity[]" value="{{ old('quantity.'.$index) }}">
                                        </div>

                                        <div class="form-group col-6">
                                            <label>Select colors</label>
                                            <select class="custom-select" name="colors[]">
                                                <option selected value="">Colors</option>
                                                @foreach ($colors as $color)
                                                    <option value="{{ $color->id }}" @if ($color->id == old('colors')[$index]) selected @endif>
                                                        {{ $color->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="form-group col-6">
                                            <label>Images</label>
                                            <div class="input-group">
                                                <div class="custom-file">
                                                    <input type="file" multiple class="custom-file-input" name="images{{ $index }}[]" accept="image/*">
                                                    <label class="custom-file-label">Choose images</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-2">
                                        <button type="button" class="btn btn-dark deleteAttribute">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        @else
                            <div id="attributeWrapper">
                                @foreach ($product->attributes as $index=>$attribute)
                                <div style="display: none">
                                    @foreach ($attribute->images as $image)
                                        <input type="checkbox" name="old_images{{ $index }}[]" value="{{ $image->path }}" checked>
                                    @endforeach
                                </div>

                                <div class="row align-items-center mt-5" id="attribute">
                                    <div class="col-10 row">
                                        <div class="form-group col-6">
                                            <label>Select sizes</label>
                                            <select class="custom-select" name="sizes[]">
                                                <option selected value="">Sizes</option>
                                                @foreach ($sizes as $size)
                                                    <option value="{{ $size->id }}" @if($size->id == $attribute->size_id) selected @endif>
                                                        {{ $size->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="form-group col-6">
                                            <label>Product Quantity</label>
                                            <input type="number" class="form-control" placeholder="Enter Quantity" 
                                            name="quantity[]" value="{{ $attribute->product_quantity }}">
                                        </div>

                                        <div class="form-group col-6">
                                            <label>Select colors</label>
                                            <select class="custom-select" name="colors[]">
                                                <option selected value="">Colors</option>
                                                @foreach ($colors as $color)
                                                    <option value="{{ $color->id }}" @if($color->id == $attribute->color_id) selected @endif>
                                                        {{ $color->name }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="form-group col-6">
                                            <label>Images</label>
                                            <div class="input-group">
                                                <div class="custom-file">
                                                    <input type="file" multiple class="custom-file-input" name="images{{ $index }}[]" accept="image/*">
                                                    <label class="custom-file-label">Choose images</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-2 text-center">
                                        <button type="button" class="btn btn-dark deleteAttribute">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        @endif
                        @error('sizes.*') 
                            <div class="error">The size field is required.</div>
                        @enderror
                        @error('quantity.*') 
                            <div class="error">The quantity field is required.</div>
                        @enderror

                        <div class="form-group">
                            <h5 class="m-t-30">Select Sub Category</h5>
                            <select class="custom-select" name="sub_category_id">
                                <option selected value="">Select sub-category</option>
                                @foreach ($subCategories as $subCategory)
                                    <option value="{{ $subCategory->id }}" 
                                        @if (old('sub_category_id', $product->subcategory->id) == $subCategory->id) selected @endif>
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
                            <input type="number" class="form-control" placeholder="Enter Price" 
                            name="price" value="{{ old('price', $product->price) }}">
                            @error('price') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Discount (%)</label>
                            <input type="number" class="form-control" placeholder="Enter Discount" 
                            name="discount" value="{{ old('discount', $product->discount) }}">
                            @error('discount') 
                                <div class="error">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="form-group">
                            <label>Description</label>
                            <textarea id="summernote" name="description">{!! old('description', $product->description) !!}</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-danger"> <i class="fa fa-pencil"></i> Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
