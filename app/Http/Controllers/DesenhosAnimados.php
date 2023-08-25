<?php

namespace App\Http\Controllers;

use App\Models\Models\Desenhos;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class DesenhosAnimados extends Controller
{
    public function index()
    {
        return Desenhos::all();
    }

    public function store(Request $request)
    {
        Desenhos::create($request->all());
    }

    public function show(string $id)
    {
        return Desenhos::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $desenhos = Desenhos::findOrFail($id);
        $desenhos->update($request->all());
    }

    public function destroy(string $id)
    {
        $desenhos = Desenhos::findOrFail($id);
        $desenhos->delete();
    }
}
