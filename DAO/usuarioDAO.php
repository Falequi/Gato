<?php

class usuarioDAO {

    function __construct() {
        require_once '../infaestructure/repository.php';
        $this->repository = new Repository();
    }
    
    public function guardar(usuarioDTO $obj) {
         $query = $this->repository->buildQuerySimply("guardarUsuario", 
                                                       array(
             (int) $obj->getId(),(string) $obj->getPrimernombre(), (string) $obj->getSegundonombre(),
             (string) $obj->getPrimerapellido(), (string) $obj->getSegundoapellido(),
             (string) $obj->getNumerodocumento(), (string) $obj->getEdad(),
             (string) $obj->getDireccion(), (string) $obj->getTelefono(),
             (string) $obj->getGenero(), (string)  $obj->getCorreo(),
             (string) $obj->getUsuario(), (string) md5($obj->getContrasena()),
            (int) $obj->getIdrol()));
            $this->repository->ExecuteTransaction($query);
    }

    public function login(usuarioDTO $obj){
        $query = $this->repository->buildQuery("login", 
        array((string) $obj->getUsuario(), (string) md5($obj->getContrasena())));
        $respuesta = $this->repository->ExecuteLogIn($query);
                
        if($respuesta != null){
            session_start();
            foreach ($respuesta as $keys => $values) {
                foreach ($values as $key => $value) {
                    //echo $key.": ".$value." ";
                    $_SESSION[$key] = $value;
                }
            }
        }
        header('Location: ../index.php');
    }

    public function logout(UsuarioDTO $obj){
        session_start();
        session_destroy();
        unset($_SESSION);
        header('Location: ../index.php');
    }

    public function listartodos(UsuarioDTO $obj) {
        $query = $this->repository->buildQuery("listarusuarios", array(
            (string) $obj->getUsuario()));
           //$query = "SELECT * FROM usuarios";
           $this->repository->Execute($query);
    }

    public function Search(UserDTO $obj) {
        $query = $this->repository->buildQuery("searchuser", array((int) $obj->getId()));
        $this->repository->Execute($query);
    }

    public function editar(UsuarioDTO $obj) {
        
        echo "editar";
        // $query = $this->repository->buildQuerySimply("updateuser", array((int) $obj->getId(),
        //     (string) $obj->getFirstName(), (string) $obj->getSecondName(),
        //     (string) $obj->getFirstLastName(), (string) $obj->getSecondLastName(),
        //     (string) $obj->getCedula(), (string) $obj->getCorreo(),
        //     (string) $obj->getCelular(), (string) $obj->getFoto(),
        //     (string) $obj->getUser(),
        //     (int) $obj->getRol(), (string) $obj->getDescription()));
        // $this->repository->ExecuteTransaction($query);
    }

    public function Delete(UsuarioDTO $obj) {
        $query = $this->repository->buildQuerySimply("deleteuser", array((int) $obj->getId()));
        $this->repository->ExecuteTransaction($query);
    }

    public function compararCorreo(UsuarioDTO $obj) {
        $sql = "SELECT correo from usuarios where correo ='" . $obj->getCorreo() . "'";
        $this->repository->Execute($sql);
        //echo $sql;
    }//Compra si no hay otro correo igual 

    public function compararUsuario(UsuarioDTO $obj) {
        $sql = "SELECT usuario from usuarios where usuario ='" . $obj->getUsuario() . "'";
        $this->repository->Execute($sql);
        //echo $sql;
    }//Compra si no hay otro usuario igual 
    
    public function numeroUsuario(UsuarioDTO $obj) {
        $sql = "SELECT COUNT(*) AS numerousarios FROM `usuarios`;";
        $this->repository->Execute($sql);
    }
    
    public function cantMujere(UsuarioDTO $obj) {
        $sql = "SELECT COUNT(*) as cantMujere FROM `usuarios` WHERE genero='femenino';";
        $this->repository->Execute($sql);
    }

    public function cantHombre(UsuarioDTO $obj) {
        $sql = "SELECT COUNT(*) as cantHombre FROM `usuarios` WHERE genero='masculino';";
        $this->repository->Execute($sql);
    }

    public function edadPromedio(UsuarioDTO $obj) {
        $sql = "SELECT avg(edad) as edadPromedio FROM `usuarios`;";
        $this->repository->Execute($sql);
    }

    public function rangoentre02(UsuarioDTO $obj) {
        $sql = "SELECT count(*) as rangoentre02 FROM `usuarios` WHERE edad>0 AND edad<=20;";
        $this->repository->Execute($sql);
    }

    public function rangoentr24(UsuarioDTO $obj) {
        $sql = "SELECT count(*) as rangoentr24 FROM `usuarios` WHERE edad>20 AND edad<=40;";
        $this->repository->Execute($sql);
    }

    public function rangoentr46(UsuarioDTO $obj) {
        $sql = "SELECT count(*) as rangoentr46 FROM `usuarios` WHERE edad>40 AND edad<=60;";
        $this->repository->Execute($sql);
    }

    public function rangoentr6(UsuarioDTO $obj) {
        $sql = "SELECT count(*) as rangoentr6 FROM `usuarios` WHERE edad>60;";
        $this->repository->Execute($sql);
    }

}
