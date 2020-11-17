        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
                <img src="../dist/img/gatoloco_logo.png" alt="GatoLocoStudios Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Gato LocoStudios</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="../dist/img/user1-128x128.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">
                            <?php if(isset($_SESSION['primernombre'])){
                                    echo $_SESSION['primernombre']." ".$_SESSION['primerapellido'];
                                }else
                                    echo "Invitado";
                            ?>
                        </a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item has-treeview menu-open">

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="panel.php" class="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                        <p>Inicio</p>
                                    </a>
                                </li>
                                <?php if(isset($_SESSION['primernombre'])): ?>
                                    <li class="nav-item">
                                        <a href="listado.php" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Usuarios</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="dasboard.views.php" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Estadisticas</p>
                                        </a>
                                    </li>
                                <?php endif; ?>
                            </ul>
                        </li>

                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>