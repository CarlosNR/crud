<?php

    include_once "conexao.php";
    include_once "Usuario.php";
    include_once "consultaUsuario.php";

    $emailConsulta = "ex2@gmail.com";

    $usuarioDb = consulta($pdo, $emailConsulta);

    // echo "<pre>";
    // print_r($usuarioDb);
    // echo "</pre>";

    $novoN = "exemplo 3";
    $novoE = "ex3@gmail.com";
    $novoS = "003";
    $novoNasci = "11/11/2011";
    $op = 3;

    $usuario = new Usuario($usuarioDb["nome"], $usuarioDb["email"], $usuarioDb["senha"], $usuarioDb["nascimento"]);
    
    switch ($op) {
        case 0:
            $res = $pdo->prepare("UPDATE usuarios SET nome = :novoN WHERE email = :e");

            $res->bindValue(":e", $usuario->getEmail());   
            $res->bindValue(":novoN", $novoN);
            break;
        case 1:
            $res = $pdo->prepare("UPDATE usuarios SET email = :novoE WHERE email = :e");

            $res->bindValue(":e", $usuario->getEmail());   
            $res->bindValue(":novoE", $novoE);  
            break;
        case 2:
            $res = $pdo->prepare("UPDATE usuarios SET senha = :novoS WHERE email = :e");

            $res->bindValue(":e", $usuario->getEmail());   
            $res->bindValue(":novoS", $novoS);
            break;
        case 3:
            $res = $pdo->prepare("UPDATE usuarios SET nascimento = :novoNasci WHERE email = :e");

            $res->bindValue(":e", $usuario->getEmail());   
            $res->bindValue(":novoNasci", $novoNasci);
            break;
        default:
            echo "Dado indisponivel para atualização <br/>";
        
    }

    $res->execute();
    
?>