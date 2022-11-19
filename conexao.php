<?php

    $endereco = 'localhost';
    $porta = 5432;
    $banco = 'CRUD';
    $usuario = 'postgres';
    $senha = '001100';

    try{
        $pdo = new PDO(
            "pgsql:host=$endereco;port=$porta;dbname=$banco",
            $usuario,
            $senha,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );

        // echo "Conectou com sucesso.";

    }catch (PDOException $e){
        echo "Falha ao conectar. <br/>";
        die($e->getMessage());
    }

?>