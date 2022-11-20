<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    $usuario = new Usuario("Exemplo", "exemplo@gmail.com", "001", "10/10/1990");
    
    $res = $pdo->prepare("SELECT * FROM usuarios WHERE email = :e");
    $res->bindValue(":e", $usuario->getEmail());   
    $res->execute();
    $usuarioDB = $res->fetch();
    
?>