<?php

include_once '../DTO/UsuarioDTO.php';
include_once '../DAO/UsuarioDAO.php';
include_once '../helpers/action.php';

/* ------ RECEPCION DE DATOS ------ */ 
$action             = dataExists('type');

$id                 = dataExists('id');                      
$primernombre       = dataExists('primerNombre'); 
$segundonombre      = dataExists('segundoNombre'); 
$primerapellido     = dataExists('primerApellido'); 
$segundoapellido    = dataExists('segundoApellido'); 
$numerodocumento    = dataExists('numeroDocumento');
$edad               = dataExists('edad');
$direccion          = dataExists('direccion'); 
$telefono           = dataExists('telefono');
$genero             = dataExists('genero');
$correo             = dataExists('correo');
$usuario            = dataExists('usuario');
$contrasena         = dataExists('contrasena'); 
$idrol              = dataExists('idrol');
/*----------------------------------*/

/*------ DEFINICION DE OBJETOS ------*/
$obj = new usuarioDTO(  
    $id,
    $primernombre, 
    $segundonombre, 
    $primerapellido, 
    $segundoapellido, 
    $numerodocumento,
    $edad,
    $direccion, 
    $telefono,
    $genero,
    $correo,
    $usuario,
    $contrasena, 
    3);

    //$action="numeroUsuario";

$dao = new usuarioDAO();
/*----------------------------------*/

/* ----- ENRUTADOR DE ACCIONES -----*/
executeAction($action,$dao,$obj);
/*----------------------------------*/





