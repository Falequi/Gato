<?php

class Connection {

    private $userbd;
    private $password;
    private $database;
    private $host;
    private $connect;

    public function connect() {
           
        $this->userbd = "root";
        $this->password = "";
        $this->database = "gatoaccess";
        $this->host = "localhost";

        try {
            $this->connect = new PDO("mysql:host=$this->host;
                                      dbname=$this->database", 
                                      $this->userbd, $this->password);

            $this->connect->setAttribute(PDO::ATTR_ERRMODE, 
                                         PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
        }
    }

    public function getConnect() {
        return $this->connect;
    }

}
