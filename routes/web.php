<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get( '/admin/editor', function (){
  return view( 'editor' );
} )->name('editor');
Route::get( '/admin/editor-content', function (){
  return view( 'editor-content' );
} )->name('editor-content');

Route::view('/admin/{path?}', 'admin')
  ->where('path', '.*')
  ->name('admin');