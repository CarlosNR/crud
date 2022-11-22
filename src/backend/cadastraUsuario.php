<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $dados = file_get_contents('php://input');
    $dados = json_decode($dados,true);

    echo ("<pre>");
    var_dump($dados);
    echo ("</pre>");

    $usuario = new Usuario($dados["nome"], $dados["email"], $dados["senha"], $dados["nascimento"]);
    
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