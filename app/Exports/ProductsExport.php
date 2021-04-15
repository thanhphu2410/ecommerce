<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class ProductsExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Product::all('id', 'name', 'price', 'quantity', 'discount', 'description', 'sub_category_id');
    }

    public function map($item) : array
    {
        return [
            $item->id,
            $item->name,
            $item->price,
            $item->quantity,
            $item->discount,
            $item->description,
            $item->subCategory->name,
        ] ;
    }

    public function headings(): array
    {
        return [
            'Id', 'Name', 'Price', 'Quantity', 'Discount', 'Description', 'Sub category'
        ];
    }
}
