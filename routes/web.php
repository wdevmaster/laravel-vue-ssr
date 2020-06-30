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

Route::get('/', function () {
    $v8 = new V8js();
    $jsOutput = $v8->executeString('
      var hello = "Hello";
      var world = "World";
      hello+" "+world
    ');   
    return view('welcome', compact('jsOutput'));
});
