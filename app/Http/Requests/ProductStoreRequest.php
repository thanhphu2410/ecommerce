<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'price' => 'required|numeric',
            'quantity' => 'required|array',
            'quantity.*' => 'required|numeric|min:1',
            'discount' => 'numeric',
            'description' => 'nullable',
            'images' => 'required',
            'sub_category_id' => 'required',
            'sizes' => 'required'
        ];
    }
}
