<aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
        <!-- Sidebar navigation-->
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
                        <span class="hide-menu">Tags</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('tags.index') }}">All Tags</a></li>
                        <li><a href="{{ route('tags.create') }}">New Tag</a></li>
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
                        <i class="icon-size-fullscreen"></i>
                        <span class="hide-menu">Sizes</span> 
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="{{ route('sizes.index') }}">All Sizes</a></li>
                        <li><a href="{{ route('sizes.create') }}">New Size</a></li>
                    </ul>
                </li> 
            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>