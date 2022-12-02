<?php

    include_once "conexao.php";
    include_once "Usuario.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $dados = file_get_contents('php://input');
    $dados = json_decode($dados,true);

    // echo ("<pre>");
    // var_dump($dados);
    // echo ("</pre>");

    $usuario = new Usuario($dados["nome"], $dados["email"], $dados["senha"], $dados["nascimento"]);
    
    if($usuario->getNome() && $usuario->getEmail() && $usuario->getSenha() && $usuario->getNascimento()){

        $cmd = $pdo->prepare("INSERT INTO usuarios(nome, email, senha, nascimento) VALUES (:n, :e, :s, :nasci)");

        $cmd->bindValue(":n", $usuario->getNome());
        $cmd->bindValue(":e", $usuario->getEmail());
        $cmd->bindValue(":s", $usuario->getSenha());
        $cmd->bindValue(":nasci", $usuario->getNascimento());
    
        $cmd->execute();
        echo json_encode("Cadastro concluido com sucesso.");

    
    }else{
        echo json_encode("Erro: Cadastro possui dados faltantes.");
    }

    



    
?>