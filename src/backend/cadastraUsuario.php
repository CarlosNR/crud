<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    $usuario = new Usuario("Exemplo", "exemplo@gmail.com", "001", "10/10/1990");
    
    if($usuario->getNome() && $usuario->getEmail() && $usuario->getSenha() && $usuario->getNascimento()){

        $res = $pdo->prepare("INSERT INTO usuarios(nome, email, senha, nascimento) VALUES (:n, :e, :s, :nasci)");

        $res->bindValue(":n", $usuario->getNome());
        $res->bindValue(":e", $usuario->getEmail());
        $res->bindValue(":s", $usuario->getSenha());
        $res->bindValue(":nasci", $usuario->getNascimento());
    
        $res->execute();
    
    }else{
        echo "cadastro possui dados faltantes.";
    }

    



    
?>