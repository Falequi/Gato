<?php

class usuarioDTO {
	
    private $id;
    private $primernombre; 
    private $segundonombre; 
    private $primerapellido; 
    private $segundoapellido; 
    private $numerodocumento;
    private $edad;
    private $direccion; 
    private $telefono;
    private $genero;
    private $correo;
    private $usuario;
    private $contrasena; 
    private $idrol;
    
    function __construct($id, $primernombre, $segundonombre, $primerapellido, $segundoapellido, $numerodocumento, $edad, $direccion, $telefono, $genero, $correo, $usuario, $contrasena, $idrol) {
        
        $this->id = $id;
        $this->primernombre = $primernombre;
        $this->segundonombre = $segundonombre;
        $this->primerapellido = $primerapellido;
        $this->segundoapellido = $segundoapellido;
        $this->numerodocumento = $numerodocumento;
        $this->edad = $edad;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        $this->genero = $genero;
        $this->correo = $correo;
        $this->usuario = $usuario;
        $this->contrasena = $contrasena;
        $this->idrol = $idrol;
    }
    
    function getId() {
        return $this->id;
    }

    function getPrimernombre() {
        return $this->primernombre;
    }

    function getSegundonombre() {
        return $this->segundonombre;
    }

    function getPrimerapellido() {
        return $this->primerapellido;
    }

    function getSegundoapellido() {
        return $this->segundoapellido;
    }

    function getNumerodocumento() {
        return $this->numerodocumento;
    }

    function getEdad() {
        return $this->edad;
    }

    function getDireccion() {
        return $this->direccion;
    }

    function getTelefono() {
        return $this->telefono;
    }

    function getGenero() {
        return $this->genero;
    }

    function getCorreo() {
        return $this->correo;
    }

    function getUsuario() {
        return $this->usuario;
    }

    function getContrasena() {
        return $this->contrasena;
    }

    function getIdrol() {
        return $this->idrol;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setPrimernombre($primernombre) {
        $this->primernombre = $primernombre;
    }

    function setSegundonombre($segundonombre) {
        $this->segundonombre = $segundonombre;
    }

    function setPrimerapellido($primerapellido) {
        $this->primerapellido = $primerapellido;
    }

    function setSegundoapellido($segundoapellido) {
        $this->segundoapellido = $segundoapellido;
    }

    function setNumerodocumento($numerodocumento) {
        $this->numerodocumento = $numerodocumento;
    }

    function setEdad($edad) {
        $this->edad = $edad;
    }

    function setDireccion($direccion) {
        $this->direccion = $direccion;
    }

    function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    function setGenero($genero) {
        $this->genero = $genero;
    }

    function setCorreo($correo) {
        $this->correo = $correo;
    }

    function setUsuario($usuario) {
        $this->usuario = $usuario;
    }

    function setContrasena($contrasena) {
        $this->contrasena = $contrasena;
    }

    function setIdrol($idrol) {
        $this->idrol = $idrol;
    }

}
