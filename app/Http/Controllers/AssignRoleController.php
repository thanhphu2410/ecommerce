<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\User;

class AssignRoleController extends Controller
{
    public function index(Role $role)
    {
        $users = User::all();
        $assignedUsers = $role->assigned_users;
        return view('backend.assign-role.index', compact('role', 'users', 'assignedUsers'));
    }

    public function store(Role $role)
    {
        $role->users()->sync(request('users'));
        return success('roles.index');
    }
}
