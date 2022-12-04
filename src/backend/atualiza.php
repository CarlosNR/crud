<?php

    include_once "conexao.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $dados = file_get_contents('php://input');
    $dados = json_decode($dados,true);
  
    if(isset($dados["nome"]) && isset($dados["id"])){

        $cmd = $pdo->prepare("UPDATE usuarios SET nome = :n WHERE id = :i");

        $cmd->bindValue(":n", $dados["nome"]);
        $cmd->bindValue(":i", $dados["id"]);
        
        $cmd->execute();
        echo json_encode("Nome corrigido com sucesso.");

    }elseif(isset($dados["email"]) && isset($dados["id"])){

        $cmd = $pdo->prepare("UPDATE usuarios SET email = :e WHERE id = :i");

        $cmd->bindValue(":e", $dados["email"]);
        $cmd->bindValue(":i", $dados["id"]);
        
        $cmd->execute();
        echo json_encode("Email atualizado com sucesso.");

    }elseif(isset($dados["senha"]) && isset($dados["id"])){

        $cmd = $pdo->prepare("UPDATE usuarios SET senha = :s WHERE id = :i");

        $cmd->bindValue(":s", $dados["senha"]);
        $cmd->bindValue(":i", $dados["id"]);
        
        $cmd->execute();
        echo json_encode("Senha atualizada com sucesso.");

    }elseif(isset($dados["nascimento"]) && isset($dados["id"])){
        
        $cmd = $pdo->prepare("UPDATE usuarios SET nascimento = :nasci WHERE id = :i");

        $cmd->bindValue(":nasci", $dados["nascimento"]);
        $cmd->bindValue(":i", $dados["id"]);
        
        $cmd->execute();
        echo json_encode("Data de nascimento corrigida com sucesso.");

    }else{
        echo json_encode("Erro: Operação ilegal.");
    }

    



    
?>