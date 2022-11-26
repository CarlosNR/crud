<?php

    include_once "conexao.php";
    include_once "Usuario.php";
    include_once "consultaUsuario.php";


    $res = $pdo->prepare("DELETE FROM usuarios WHERE (id = :i)");

    $res->bindValue(":i", (int)$usuarioDB);


    $res->execute();
    

    
?>