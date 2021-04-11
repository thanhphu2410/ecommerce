@extends('layouts.backend.app')
@section('content')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Sizes</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Home</a></li>
                <li class="breadcrumb-item active">Sizes</li>
            </ol>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Sizes Table</h4>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Size Name</th>
                                <th class="text-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($sizes as $size)
                            <tr>
                                <td>{{ $size->name }}</td>
                                <td>
                                    <a href="{{ route('sizes.edit', ['size' => $size->id ]) }}" 
                                        data-toggle="tooltip" data-original-title="Edit"> 
                                        <i class="fa fa-pencil text-inverse m-r-10"></i> 
                                    </a>
                                    <form action="{{ route('sizes.destroy', ['size' => $size->id ]) }}" method="post" class="d-inline">
                                        @method('delete')
                                        @csrf
                                        <button class="btn-none" type="submit" data-toggle="tooltip" data-original-title="Delete"> 
                                            <i class="fa fa-close text-danger"></i> 
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                {{ $sizes->links() }}
            </div>
        </div>
    </div>
</div>
@endsection
