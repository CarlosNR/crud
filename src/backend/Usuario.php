<?php
    class Usuario{
        // $id autoincremento
        private $nome;
        private $email;
        private $senha;
        private $nascimento;

        function __construct($new_nome, $new_email, $new_senha, $new_nascimento){

            $this->nome = $new_nome;
            $this->email = $new_email;
            $this->senha = $new_senha;
            $this->nascimento = $new_nascimento;

        }

		public function getNome(){

			return $this->nome;
			
		}

		public function setNome($nome){

			$this->nome = $nome;
			
		}

		public function getEmail(){

			return $this->email;
			
		}

		public function setEmail($email){

			$this->email = $email;
			
		}

		public function getSenha(){

			return $this->senha;
			
		}

		public function setSenha($senha){

			$this->senha = $senha;
			
		}

		public function getNascimento(){

			return $this->nascimento;
			
		}

		public function setNascimento($nascimento){

			$this->nascimento = $nascimento;
			
		}
    }
?>