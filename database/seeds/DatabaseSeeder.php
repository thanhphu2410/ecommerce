<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            SystemSettingSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            RoleUserSeeder::class,
        ]);
    }
}
