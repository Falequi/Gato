<?php include '../infaestructure/sesiones.php'?>
<?php include 'header.php';?>
<?php include 'sidebar.php';?>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->


        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">Estadisticas</h1>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <!-- Contenido -->
                    <div class="row">
                        <div class="col-lg-3 col-6">
                            <!-- small box -->
                            <div class="small-box bg-warning">
                                <div class="inner" >
                                    <h3 id="usuariosRegistrados"></h3>
                                    <p>Usuarios Registrados</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-person-add"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-6">
                            <!-- small box -->
                            <div class="small-box bg-info">
                                <div class="inner">
                                    <h3 id="cantMujere"></h3>

                                    <p>Cantidad de Mujeres</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-bag"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-6">
                            <!-- small box -->
                            <div class="small-box bg-danger">
                                <div class="inner">
                                    <h3 id="edadPromedio"></h3>
                                    <p>Promedio de Edades</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                        <div class="col-lg-3 col-6">
                            <!-- small box -->
                            <div class="small-box bg-warning">
                                <div class="inner" >
                                    <h3 id="cantHombre"></h3>
                                    <p>Cantidad de Hombres</p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-person-add"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <!-- ./col -->
                    </div>
                    <!-- /Contenido -->
                </div>
                <!-- /.container-fluid -->
                <!-- promedio de edades -->
                
                <!-- fin de promedio de edades -->
            </section>
            <!-- otro -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Rango de Edades</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table class="table table-bordered">
                  <thead>                  
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>Descripcion</th>
                      <th>Progreso</th>
                      <th style="width: 40px">Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>De O a 20 años --><b><span id="rangoentre02"></span></b></td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar progress-bar-danger" id="rangoentre02b"></div>
                        </div>
                      </td>
                      <td><span class="badge bg-danger rangoentre02" id="rangoentre02p"></span></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>de 21 a 40 años --><b><span id="rangoentr24"></span></b></td>
                      <td>
                        <div class="progress progress-xs">
                          <div class="progress-bar bg-warning" id="rangoentr24b" style=""></div>
                        </div>
                      </td>
                      <td><span class="badge bg-warning" id="rangoentr24p"></span></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>de 40 a 60 años --><b><span id="rangoentr46"></span></b></td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar bg-primary" id="rangoentr46b" style=""></div>
                        </div>
                      </td>
                      <td><span class="badge bg-primary" id="rangoentr46p"></span></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>de 60 en adelante --><b><span id="rangoentr6"></span></b></td>
                      <td>
                        <div class="progress progress-xs progress-striped active">
                          <div class="progress-bar bg-success" id="rangoentr6b" style=""></div>
                        </div>
                      </td>
                      <td><span class="badge bg-success" id="rangoentr6p"></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination pagination-sm m-0 float-right">
                  <li class="page-item"><a class="page-link" href="#">«</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">»</a></li>
                </ul>
              </div>
            </div>
            <!-- fin otro -->
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
<?php include 'footer.php' ?>