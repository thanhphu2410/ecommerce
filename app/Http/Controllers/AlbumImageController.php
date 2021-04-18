<?php

namespace App\Http\Controllers;

use App\Models\Album;

class AlbumImageController extends Controller
{
    public function index()
    {
        $albums = Album::all()->load('images');
        return view('backend.album.index', compact('albums'));
    }

    public function store()
    {
        $album = Album::create(request()->all());

        foreach (request('images') as $image) {
            $path = $image->store('album', 'public');
            $album->images()->create(['path' => 'storage/'.$path]);
        }

        return success('albums-images');
    }

    public function destroy(Album $album)
    {
        $album->load('images');
        foreach ($album->images as $image) {
            delete_file($image->path);
        }
        $album->delete();
        return success('albums-images');
    }

    public function display(Album $album)
    {
        Album::query()->update(['display' => 0]);
        $album->update(['display' => 1]);
        return success('albums-images');
    }

    public function unDisplay(Album $album)
    {
        $album->update(['display' => 0]);
        return success('albums-images');
    }
}
