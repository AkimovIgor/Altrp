<?php

namespace App;

use App\Constructor\Template;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Schema;
use Mockery\Exception;

/**
 * Class Page
 * @package App
 * @property User $user
 */

class Page extends Model
{
  //
  use SoftDeletes;
  protected $fillable = [
    'title',
    'author',
    'content',
    'path',
  ];

  /**
   * @return array
   */
  static function get_frontend_routes()
  {
    $pages = [];
    if( ! appIsInstalled()  ){
      return $pages;
    }
    if( ! Schema::hasTable( 'pages' )  ){
      return $pages;
    }
    try{
      $pages = Page::all()->map->only( [ 'path' ] )->map( function ( $path ) {
        return $path['path'];
      } )->toArray();
    } catch (Exception $e){
    }
    return $pages;
  }

  /**
   * @return array
   */
  public static function get_pages_for_frontend()
  {
    $pages = [];

    $_pages = static::all();

    foreach ( $_pages as $page ) {
      $pages[] = [
        'path' => $page->path,
        'id' => $page->id,
        'areas' => self::get_areas_for_page( $page->id ),
      ];
    }

    return $pages;
  }

  /**
   * @param $page_id
   * @return array
   */
  public static function get_areas_for_page( $page_id ){
    $areas = [];

    $header = Template::where( 'area', 2 )->first();
    if( $header ){
      $areas[] = [
        'area_name' => 'header',
        'id' => 'header',
        'settings' => [],
        'template' => $header
      ];
    }
    $areas[] = [
      'area_name' => 'content',
      'id' => 'content',
      'settings' => [],
      'template' => PagesTemplate::where( 'page_id', $page_id )
        ->where( 'template_type', 'content' )->first()->template
    ];

    $footer = Template::where( 'area', 3 )->first();
    if( $footer ){
      $areas[] = [
        'area_name' => 'footer',
        'id' => 'footer',
        'settings' => [],
        'template' => $footer
      ];
    }

    return $areas;
  }

  function user()
  {
    return $this->belongsTo( User::class, 'author' );
  }

  /**
   * @return \Illuminate\Database\Eloquent\Builder|Model|null|Template
   */
  function get_content_template()
  {
    $pages_template = PagesTemplate::where( 'page_id', $this->id )
      ->where( 'template_type', 'content' )->first();
    if ( ! $pages_template ) {
      return null;
    }
    return $pages_template->template;
  }

}
