<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlbumImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = public_path('sql/album_images.sql');
        $sql = file_get_contents($path);
        DB::connection()->getPdo()->exec($sql);
    }
}
