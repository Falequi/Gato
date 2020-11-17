                   <!-- formulario de productor -->
                   <div class="row align-content-center">
                        <div class="col-lg-6 col-6">
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Login</h3>
                                </div>
                                <!-- /.card-header -->
                                <!-- form start -->
                                <form class="form-horizontal" method="POST" action="../controllers/usuarioCtl.php" name="formRegistro">
                                    <div class="card-body">
                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Usuario</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputEmail3" placeholder="Email" name="usuario">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" name="contrasena">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.card-body -->
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-info">Ingresar</button>
                                        <a href="registro.php" class="btn btn-info"> Regsitrarte</a>
                                        <button type="submit" class="btn btn-info">Cancelar</button>
                                        <input type="text" name="type" value="login" hidden>
                                    </div>
                                    <!-- /.card-footer -->
                                </form>
                            </div>

                        </div>

                    </div>
                    <!-- fin de formulario de productos -->