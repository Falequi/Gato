<?php 
session_start();
(!isset($_SESSION['primernombre'])) ? header('Location: ../index.php') :""; 
?>