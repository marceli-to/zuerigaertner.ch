<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class SupporterStoreRequest extends FormRequest
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
      'organisation' => 'required',
      'website' => 'required',
      'image' => 'image|mimes:jpeg,png,jpg,eps,tiff,svg|max:16384',
    ];
  }

  /**
   * Custom message for validation
   *
   * @return array
   */

  public function messages()
  {
    return [
      'organisation.required' => 'Organisation fehlt',
      'website.required' => 'Webseite fehlt',
      'image.image' => 'Bild fehlt',
      'image.mimes' => 'Bildtyp ungültig (erlaubt sind JPG, PNG, GIF, EPS, TIFF, SVG)',
      'image.max' => 'Bild zu gross (max. 16MB)',
    ];
  }
}