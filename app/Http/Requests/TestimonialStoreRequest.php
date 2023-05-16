<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class TestimonialStoreRequest extends FormRequest
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
      'firstname' => 'required',
      'name' => 'required',
      'location' => 'required',
      'quote' => 'required',
      'image' => 'image|mimes:jpeg,png,jpg|max:16384',
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
      'firstname.required' => 'Vorname fehlt',
      'name.required' => 'Name fehlt',
      'location.required' => 'Wohnort fehlt',
      'quote.required' => 'Zitat fehlt',
      'image.image' => 'Bild fehlt',
      'image.mimes' => 'Bildtyp ungültig (erlaubt sind JPG, PNG, GIF)',
      'image.max' => 'Bild zu gross (max. 16MB)',
    ];
  }
}