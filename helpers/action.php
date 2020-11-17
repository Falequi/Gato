<?php

function dataExists($name){
    return isset($_REQUEST[$name])?$_REQUEST[$name]:"";
}

function executeAction($action,$dao,$obj){
    
    switch ($action){
    
        case "guardar":
             $dao->guardar($obj);
             break;
         
        case "editar":
             $dao->editar($obj);
             break;
         
        case "eliminar":
             $dao->eliminar($obj);
             break;
         
        case "actualizar":
             $dao->actualizar($obj);
             break;
         
        case "listartodos":
             $dao->listartodos($obj);
             break;
         
        case "login":
             $dao->login($obj);
             break;
         
        case "logout":
             $dao->logout($obj);
             break;
         
        case "compararCorreo":
             $dao->compararCorreo($obj);
             break;
         
        case "compararUsuario":
             $dao->compararUsuario($obj);
             break;
     

        case "numeroUsuario":
             $dao->numeroUsuario($obj);
             break;
             
        case "cantMujere":
             $dao->cantMujere($obj);
             break;
         
        case "cantHombre":
             $dao->cantHombre($obj);
             break;
         
        case "edadPromedio":
             $dao->edadPromedio($obj);
             break;
         
        case "rangoentre02":
             $dao->rangoentre02($obj);
             break;
         
        case "rangoentr24":
             $dao->rangoentr24($obj);
             break;
         
        case "rangoentr46":
             $dao->rangoentr46($obj);
             break;
         
        case "rangoentr6":
             $dao->rangoentr6($obj);
             break;

         default:
             echo "error en la accion";
             break; 
    }
    
}