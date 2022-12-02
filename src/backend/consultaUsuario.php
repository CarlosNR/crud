<?php

    include_once "conexao.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET,POST');

    $dados = file_get_contents('php://input');
    $dados = json_decode($dados, true);

    $email= $dados["email"];
    $senha = $dados["senha"];

    if($email && $senha){

        $cmd = $pdo->prepare("SELECT * FROM usuarios WHERE email = :e AND senha = :s ");

        $cmd->bindValue(":e", $email);   
        $cmd->bindValue(":s", $senha);   

        $cmd->execute();
        $res = $cmd->fetch(PDO::FETCH_ASSOC);

        echo json_encode($res);

    }else{
        echo json_encode("Erro: Cadastro possui dados faltantes.");
    }

?>