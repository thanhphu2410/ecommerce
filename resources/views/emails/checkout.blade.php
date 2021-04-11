@component('mail::message')
# Order Confirmation

Hey {{ $order->customer_name }}, <br>
We've got your order! 

<center>
# ORDER NO. {{ $order->order_no }}
</center>

#### ITEMS ORDERED
@component('mail::table')
| Product                                                   | Size                          | Quantity                     | Price  |
| --------------------------------------------------------- |:-----------------------------:| ----------------------------:| ------:|
@foreach ($order->details as $index=>$item)
| {{ $item->product->name }} - {{ $item->color->name }}      | {{ $item->size->name }}  | {{ $item->quantity }}     | {{ money($item->product->after_discount * $item->quantity) }}      |
@endforeach
@endcomponent

@component('mail::table')
| &nbsp;         | &nbsp;            |
| -------------  |:-----------------:|
| Total          | {{ money(123) }}  |
@endcomponent

#### BILLING INFO <br>
{{ $order->customer_name }} <br>
{{ $order->customer_phone }} <br>
{{ $order->customer_address }} <br>
{{ $order->province->name }} <br>
{{ $order->district->name }} <br>
{{ $order->ward->name }} <br>

{{-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent --}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
