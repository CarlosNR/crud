<?php

    include_once "conexao.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');


    $dados = file_get_contents('php://input');
    $dados = json_decode($dados, true);

    $id= (int)$dados["id"];
    $senha = $dados["senha"];

    if(is_int($id) && $senha){

        $res = $pdo->prepare("DELETE FROM usuarios WHERE id = :i AND senha = :s ");

        $res->bindValue(":i", $id);   
        $res->bindValue(":s", $senha);   

        $res->execute();
        $consulta = $res->fetch();

        echo json_encode($consulta);

    }else{
        echo json_encode("cadastro possui dados faltantes.");
        
    }

?>

    

    