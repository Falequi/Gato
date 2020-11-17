<?php

require_once 'connection.php';
require_once 'cleaner.php';

class Repository {

    private $connection;
    private $objConnection;
    private $clean;

    function Repository() {
        $this->clean = new Cleaner();
        $this->objConnection = new Connection();
        $this->connection = $this->objConnection->connect();
    }

    function getConnection() {
        return $this->connection;
    }

    function getObjConnection() {
        return $this->objConnection;
    }

    public function buildQuery($nameFunction, $array) {

        $query = "CALL " . $nameFunction . "(";

        if ($array) {//tiene parametros?
            for ($i = 0; $i < count($array); $i++) {
                (is_string($array[$i])) ? $query .= "'" . $this->cleanValue($array[$i]) . "'" : $query .= $array[$i]; //si es String pone comilla                
                if ((int) ($i) < (int) (count($array) - 1)) { //si quedan mas parametros pone una ,                    
                    $query .= ",";
                }
            }
        }
        $query .= ");";
        return $query;
    }

    public function buildQuerySimply($nameFunction, $array) {
        $query = "SELECT " . $nameFunction . "(";

        for ($i = 0; $i < count($array); $i++) {
            (is_string($array[$i])) ? $query .= "'" . $this->cleanValue($array[$i]) . "'" : $query .= $array[$i]; //si es String pone comilla
            if ($i < count($array) - 1) { //si quedan mas parametros pone una ,
                $query .= ",";
            }
        }
        $query .= ");";
        return $query;
    }

    public function ExecuteLogIn($query) {

        //echo $query;

        /* Le asigno la consulta SQL a la conexion de la base de datos */
        $resultado = $this->objConnection->getConnect()->prepare($query);
        /* Executo la consulta */
        $resultado->execute();
        /* Si obtuvo resultados, entonces paselos a un vector */
        if ($resultado->rowCount() > 0) {
            $vec = $resultado->fetchAll(PDO::FETCH_ASSOC);
        }

        if (isset($vec)) {
            $vec[0]['code']= '1';
        } else {
            $vec= null;
        }

        return $vec;
    }

    public function Execute($query) {
        try {
            /* Le asigno la consulta SQL a la conexion de la base de datos */
            $resultado = $this->objConnection->getConnect()->prepare($query);
            /* Executo la consulta */
            $resultado->execute();
            /* Si obtuvo resultados, entonces paselos a un vector */
            if ($resultado->rowCount() > 0) {
                $vec = $resultado->fetchAll(PDO::FETCH_ASSOC);
            }

            if (isset($vec)) {
                echo(json_encode(['code' => '1',
                    'data' => json_encode($vec)]));
            } else {
                echo '{"res" : "NotInfo","code":"0","data":"[]"}';
            }
        } catch (PDOException $exception) {
            /* Se captura el error de ejecucion SQL */
            echo ' {
                "res" : "' . $exception . '"
            }';
        }
    }

    public function ExecuteTransaction($query) {
        try {
            /* Le asigno la consulta SQL a la conexion de la base de datos */
            $resultado = $this->objConnection->getConnect()->prepare($query);
            /* Executo la consulta */
            $resultado->execute();
            /* Si obtuvo resultados, entonces paselos a un vector */
            if ($resultado->rowCount() > 0) {
                $vec = $resultado->fetchAll(PDO::FETCH_NUM);
            }
            
            if ($vec[0][0] > 0) {
                echo(json_encode(['code' => '1']));
            } else {
                echo(json_encode(['code' => '2']));
            }
        } catch (PDOException $exception) {
            echo(json_encode(['code' => '3']));
        }
    }

   public function cleanValue($value) {
        return $this->clean->cleanValue($value);
    }

}
