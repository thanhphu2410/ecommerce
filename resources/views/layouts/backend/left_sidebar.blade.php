<aside class="left-sidebar">
    <div class="scroll-sidebar">
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
                <li class="user-pro"> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg" alt="user-img" class="img-circle">
                        <span class="hide-menu">Mark Jeckson</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="javascript:void(0)"><i class="ti-user"></i> My Profile</a></li>
                        <li><a href="javascript:void(0)"><i class="ti-wallet"></i> My Balance</a></li>
                        <li><a href="javascript:void(0)"><i class="ti-email"></i> Inbox</a></li>
                        <li><a href="javascript:void(0)"><i class="ti-settings"></i> Account Setting</a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-power-off"></i> Logout</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="waves-effect waves-dark" href="/dashboard" >
                        <i class="icon-speedometer"></i>
                        <span class="hide-menu">Dashboard</span>
                    </a>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="ti-layout-grid2"></i>
                        <span class="hide-menu">Categories</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('categories.index') }}">All Categories</a></li>
                        <li><a href="{{ route('categories.create') }}">New Category</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-tag-multiple"></i>
                        <span class="hide-menu">Sub Categories</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('sub-categories.index') }}">All Sub Categories</a></li>
                        <li><a href="{{ route('sub-categories.create') }}">New Sub Category</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="icon-size-fullscreen"></i>
                        <span class="hide-menu">Sizes</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('sizes.index') }}">All Sizes</a></li>
                        <li><a href="{{ route('sizes.create') }}">New Size</a></li>
                    </ul>
                </li> 
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="ti-shopping-cart"></i>
                        <span class="hide-menu">Products</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('products.index') }}">All Products</a></li>
                        <li><a href="{{ route('products.create') }}">New Product</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="fa fa-user-tag"></i>
                        <span class="hide-menu">Roles</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('roles.index') }}">All Roles</a></li>
                        <li><a href="{{ route('roles.create') }}">New Role</a></li>
                    </ul>
                </li> 
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="fas fa-shopping-bag"></i>
                        <span class="hide-menu">Orders</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('orders.index') }}">All Orders</a></li>
                    </ul>
                </li> 
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <span class="hide-menu">Customers</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('customers.index') }}">All Customers</a></li>
                    </ul>
                </li> 
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="mdi mdi-tag-multiple"></i>
                        <span class="hide-menu">Blog Tags</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('tags.index') }}">All Tags</a></li>
                        <li><a href="{{ route('tags.create') }}">New Tag</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="far fa-newspaper"></i>
                        <span class="hide-menu">Blogs</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('blogs.index') }}">All Blogs</a></li>
                        <li><a href="{{ route('blogs.create') }}">New Blog</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</aside>