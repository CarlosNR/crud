<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    function consulta($pdo, $emailConsulta){   

        $res = $pdo->prepare("SELECT * FROM usuarios WHERE email = :e");

        $res->bindValue(":e", $emailConsulta);   

        $res->execute();
        $usuarioDB = $res->fetch();

        return $usuarioDB;
        
    }

    
?>