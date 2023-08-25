<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desenhos extends Model
{
    protected $fillable = [
        'name',
        'image',
        'link',
        'description',
    ];
}
