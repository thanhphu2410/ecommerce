<?php

namespace App\Http\Controllers;

use App\Exports\OrdersExport;
use App\Exports\ProductsExport;
use App\Exports\CategoriesExport;
use App\Exports\SubCategoriesExport;
use Maatwebsite\Excel\Facades\Excel;

class ExportExcelController extends Controller
{
    public function categories()
    {
        return Excel::download(new CategoriesExport, 'categories.xlsx');
    }

    public function subCategories()
    {
        return Excel::download(new SubCategoriesExport, 'sub-categories.xlsx');
    }

    public function products()
    {
        return Excel::download(new ProductsExport, 'products.xlsx');
    }

    public function orders()
    {
        return Excel::download(new OrdersExport, 'orders.xlsx', \Maatwebsite\Excel\Excel::XLSX);
    }
}
