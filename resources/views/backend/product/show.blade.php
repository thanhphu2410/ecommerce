@extends('layouts.backend.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h3 class="p-2">{{ $product->name }}</h3>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6">
                            <div class="white-box text-center"> <img src="/{{ $image->path }}" class="img-responsive">
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-6">
                            <h4 class="box-title">Product description</h4>
                            <p>{{ $product->description }}</p>
                            <h2 class="m-t-40">{{ $product->price }} vnd <small
                                    class="text-success">({{ $product->discount }}% off)</small></h2>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title m-t-40">General Info</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td width="390">Name</td>
                                            <td>{{ $product->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{{ $product->price }}</td>
                                        </tr>
                                        <tr>
                                            <td>Discount (%)</td>
                                            <td>{{ $product->discount }}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{{ $product->description }}</td>
                                        </tr>
                                        <tr>
                                            <td>Sizes</td>
                                            <td>{{ $product->sizes->implode('name', ', ') }}</td>
                                        </tr>
                                        <tr>
                                            <td>Tags</td>
                                            <td>{{ $product->tags->implode('name', ', ') }}</td>
                                        </tr>
                                        <tr>
                                            <td>Reviews</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-secondary" data-toggle="modal"
                                                    data-target="#exampleModal">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
@endsection
