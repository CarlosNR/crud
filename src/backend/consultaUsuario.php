<?php

    include_once "conexao.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');


    $dados = file_get_contents('php://input');
    $dados = json_decode($dados, true);

    $email= $dados["email"];
    $senha = $dados["senha"];

    if($email && $senha){

        $res = $pdo->prepare("SELECT * FROM usuarios WHERE email = :e AND senha = :s ");

        $res->bindValue(":e", $email);   
        $res->bindValue(":s", $senha);   

        $res->execute();
        $consulta = $res->fetch();

        echo json_encode($consulta);

    }else{
        echo json_encode("cadastro possui dados faltantes.");
        
    }

?>