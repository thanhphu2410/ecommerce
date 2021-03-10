@extends('layouts.backend.app')
@section('content')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title m-t-40">General Info</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td width="390">Customer Name</td>
                                            <td>{{ $order->customer_name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Phone</td>
                                            <td>{{ $order->customer_phone }}</td>
                                        </tr>
                                        <tr>
                                            <td>Customer Email</td>
                                            <td>{{ $order->customer_email }}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{{ $order->customer_address }}</td>
                                        </tr>
                                        <tr>
                                            <td>Province</td>
                                            <td>{{ $order->province->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>District</td>
                                            <td>{{ $order->district->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Ward</td>
                                            <td>{{ $order->ward->name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Notes</td>
                                            <td>{{ $order->notes }}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>{{ $order->price }} đ</td>
                                        </tr>
                                        <tr>
                                            <td>Details</td>
                                            <td>
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#modelId">
                                                  View
                                                </button>
                                                
                                                <!-- Modal -->
                                                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title">Details</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="table-responsive">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Product Name</th>
                                                                                <th>Size Name</th>
                                                                                <th>Quantity</th>
                                                                                <th>Discount</th>
                                                                                <th>Total</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            @foreach ($order->details as $item)
                                                                            <tr>
                                                                                <td>{{ $item->product->name }}</td>
                                                                                <td>{{ $item->size->name }}</td>
                                                                                <td>{{ $item->quantity }}</td>
                                                                                <td>{{ $item->discount }}</td>
                                                                                <td>{{ $item->total }}</td>
                                                                            </tr>
                                                                            @endforeach
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
@endsection
