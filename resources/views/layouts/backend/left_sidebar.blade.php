<aside class="left-sidebar">
    <div class="scroll-sidebar">
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
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
                        <i class="fas fa-toolbox"></i>
                        <span class="hide-menu">Toolbox</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('sizes.index') }}">All Sizes</a></li>
                        <li><a href="{{ route('sizes.create') }}">New Size</a></li>
                        <li><a href="{{ route('colors.index') }}">All Colors</a></li>
                        <li><a href="{{ route('colors.create') }}">New Color</a></li>
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
                    <a class="waves-effect waves-dark" href="{{ route('orders.index') }}">
                        <i class="fas fa-shopping-bag"></i>
                        <span class="hide-menu">Orders</span> 
                    </a>
                </li> 
                <li> 
                    <a class="waves-effect waves-dark" href="{{ route('customers.index') }}">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <span class="hide-menu">Customers</span> 
                    </a>
                </li> 
                <li> 
                    <a class="waves-effect waves-dark" href="{{ url('contact') }}">
                        <i class="fas fa-address-card"></i>
                        <span class="hide-menu">Contact Message</span> 
                    </a>
                </li> 
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="far fa-newspaper"></i>
                        <span class="hide-menu">Blogs</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('tags.index') }}">All Tags</a></li>
                        <li><a href="{{ route('tags.create') }}">New Tag</a></li>
                        <li><a href="{{ route('blogs.index') }}">All Blogs</a></li>
                        <li><a href="{{ route('blogs.create') }}">New Blog</a></li>
                    </ul>
                </li>
                <li> 
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)"
                        aria-expanded="false">
                        <i class="ti-settings"></i>
                        <span class="hide-menu">Settings</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('system-setting.edit') }}">System Settings</a></li>
                        <li><a href="{{ route('roles.index') }}">All Roles</a></li>
                        <li><a href="{{ route('roles.create') }}">New Role</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</aside>