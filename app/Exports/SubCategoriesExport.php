<?php

namespace App\Exports;

use App\Models\SubCategory;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;

class SubCategoriesExport implements FromCollection, WithHeadings, WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SubCategory::all();
    }

    public function map($item) : array
    {
        return [
            $item->id,
            $item->name,
            $item->category->name,
        ] ;
    }

    public function headings(): array
    {
        return [
            'id',
            'name',
            'category'
        ];
    }
}
