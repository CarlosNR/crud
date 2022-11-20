<?php

    include_once "conexao.php";
    include_once "Usuario.php";
    include_once "consultaUsuario.php";
    
    if($usuario->getNome() && $usuario->getEmail() && $usuario->getSenha() && $usuario->getNascimento()){

        $res = $pdo->prepare("DELETE FROM usuarios WHERE (id = :i)");


        $res->bindValue(":i", (int)$usuarioDB);

    
        $res->execute();
    
    }else{
        echo "cadastro possui dados faltantes.";
    }

    



    
?>