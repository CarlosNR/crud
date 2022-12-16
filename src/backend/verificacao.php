<?php

    function verificaId($id): bool{
        if(is_int($id) && $id > 0){
            echo "id okay <br/>";
            return true;
        }else{
            echo "id falhou <br/>";
            return false;
        }
    }

    function verificaNome($nome): bool{
        if(strlen($nome) > 0 && ctype_alpha($nome)){
            echo "nome okay <br/>";
            return true;
        }else{
            echo "nome falhou <br/>";
            return false;
        }
    }
    
    function verificaNascimento($data):bool{
        #dd/MM/yyyy -> mesmo regex usado no yup no react
        if(preg_match("/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/", $data) === 0) {
            echo 'data falhou <br/>';
            return false;
        }else{
            echo 'data okay <br/>';
            return true;
        }
    }

    function verificaEmail($email): bool{

    // verifica vazio e falta de @ 

        $emailIsValid = FALSE;

        if (
            !empty($email) &&
            strpos($email, '@') !== FALSE
        ) {

            // disseca email

                $email  = explode('@', $email);
                $user   = $email[0];
                $domain = $email[1];

            // valida

                if (
                    count($email) === 2 &&
                    !empty($user) &&
                    !empty($domain) &&
                    checkdnsrr($domain)
                ) {
                    $emailIsValid = TRUE;
                }
        }

        if($emailIsValid === TRUE){
            echo 'email okay <br/>';
            return true;
        }else{
            echo 'email falhou <br/>';
            return false;
        }

    }

    function verificaSenha($senha){
        if(strlen($senha) >= 6){
            echo "senha okay <br/>";
            return true;
        }else{
            echo "senha falhou <br/>";
            return false;
        }

    }

?>