<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    public function index(){
        $bookmars = Auth::user()->bookmarks;
        return Inertia::render('Bookmarks/index', ['bookmarks' => $bookmars]);
    }
}
