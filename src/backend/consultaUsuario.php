<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    function consulta($pdo){
        $email = "ex2@gmail.com";

        $usuario = new Usuario("Exemplo", $email, "001", "10/10/1990");
    
        $res = $pdo->prepare("SELECT * FROM usuarios WHERE email = :e");
        $res->bindValue(":e", $usuario->getEmail());   
        $res->execute();
        $usuarioDB = $res->fetch();
        return $usuarioDB;
    }

    
?>