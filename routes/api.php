<?php

use App\Http\Controllers\DesenhosAnimados;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('desenhos', DesenhosAnimados::class);
