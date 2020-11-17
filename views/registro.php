<?php session_start(); ?>
<?php include 'header.php';?>
<?php include 'sidebar.php';?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">
                                <?php if(isset($_SESSION['primernombre'])){
                                    echo "Bienvenido ".$_SESSION['primernombre'];
                                }else
                                    echo "Registro de Usuario";
                                ?>
                            </h1>
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
            <div class="py-5 container">
                <div class="col-md-12S order-md-1">
                    <form   class="needs-validation" 
                            method="post" action="../controllers/UsuarioCtl.php"
                            name="registro"> <!-- Formulario -->
                        <div class="row py-2">   
                            <div class="col-md-6 mb-3"> <!-- Primer Nombre -->
                                <label for="primerNombre">Primer Nombre:* <span id="lprimerNombre"></span></label>
                                <input  id="primerNombre" type="text" class="form-control primerNombre" 
                                        placeholder="Digite su Primer Nombre" 
                                        name="primerNombre">
                            </div>
                            <div class="col-md-6 mb-3"> <!-- Segundo Nombre -->
                                <label for="segundoNombre">Segundo Nombre<span id="lsegundoNombre"></span></label></label>
                                <input  type="text" class="form-control segundoNombre" 
                                        id="segundoNombre" placeholder="Digite su segundo Nombre" 
                                        name="segundoNombre">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3"> <!-- Primer Apellido -->
                                <label for="primerApellido">Primer Apellido:*<span id="lprimerApellido"></span></label>
                                <input  type="text" class="form-control primerApellido" 
                                        id="primerApellido" placeholder="Digite su primer apellido" 
                                        name="primerApellido">
                            </div>                      
                            <div class="col-md-6 mb-3"><!-- Segundo Apellido -->
                                <label for="segundoApellido">Segundo Apellido<span id="lsegundoApellido"></span></label>
                                <input  type="text" class="form-control segundoApellido" 
                                        id="segundoApellido" placeholder="Digite su segundo Apellido" 
                                        name="segundoApellido">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3"><!-- Numero de Documento -->
                                <label for="numeroDocumento">Numero de Documento:*<span id="lnumeroDocumento"></span></label>
                                <input  type="number" class="form-control numeroDocumento" 
                                        id="numeroDocumento" placeholder="Digite numero de Cedula" 
                                        name="numeroDocumento">
                            </div>
                            <div class="col-md-6 mb-3"> <!-- Edad -->
                                <label for="edad">Edad:*<span id="ledad"></span></label>
                                <input  type="number" class="form-control edad" id="edad" 
                                        placeholder="Digite su direccion" name="edad">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3"> <!-- Direccion -->
                                        <label for="direccion">Digite su Direccion:*<span id="ldireccion"></span></label>
                                        <input  type="text" class="form-control" id="direccion" 
                                                placeholder="Digite su direccion" name="direccion">
                            </div>
                            <div class="col-md-6 mb-3"> <!-- Numero de Telefono-->
                                <label for="telefono">Telefono:*<span id="ltelefono"></span></label>
                                <input  type="number" class="form-control telefono" id="telefono" 
                                        placeholder="Number Phone" name="telefono">
                            </div>        
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3"><!-- Genero -->
                                <label for="genero">Genero:*<span id="lgenero"></span></label>
                                <select class="custom-select d-block w-100 genero" id="genero" name="genero">
                                    <option value="">Seleccione su genero....</option>
                                    <option value ="femenino">  Femenino</option>
                                    <option value ="masculino"> Masculino</option>
                                    <option value ="otro">      Otro</option>
                                </select>
                            </div>
                            <div class=" col-md-6 mb-3"> <!--Correo Electronico-->
                                <label for="correo">Correo:*<span id="lcorreo"></span></label>
                                <input  type="email" class="form-control" id="correo" 
                                        placeholder="Digite su correo" name="correo">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3"> <!-- Contraseña -->
                                    <label for="contrasena">Contraseña:*<span class="lcontrasena"></span></label>
                                    <input  type="password" class="form-control" id="contrasena" 
                                            placeholder="Digite su Contraseña" name="contrasena">        
                            </div>          

                            <div class="col-md-6 mb-3"> <!-- Id usuario -->
                                    <label for="conContrasena">Confirmar Contraseña*<span id="lconContrasena"></span></label>
                                    <input  type="password" class="form-control conContrasena" id="conContrasena" 
                                            placeholder="Digite su usuario" name="conContrasena">        
                            </div>
                        </div>     
                        <div class="row">
                            <div class="col-md-6 mb-3"> <!-- Id usuario -->
                                    <label for="usuario">Usuario*<span id="lusuario"></span></label>
                                    <input  type="text" class="form-control usuario" id="usuario" 
                                            placeholder="Digite su usuario" name="usuario">        
                            </div>
                        </div>     
                        <hr class="mb-4">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <input  class="btn btn-primary btn-lg btn-block" type="button" 
                                        value="guardar" name="btnGuardar" id="btnGuardar"> 
                            </div>
                            <div class="col-md-4 mb-3">
                                <a href="#" class="btn btn-primary btn-lg btn-block" type="submit" name="btnBorrar">Borrar</a>
                            </div>    
                            <div class="col-md-4 mb-3">
                                <a href="../index.php" class="btn btn-primary btn-lg btn-block" type="submit" name="btnRegresar" id="btnRegresar">Regresar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>                  
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
<?php include 'footer.php'; ?>