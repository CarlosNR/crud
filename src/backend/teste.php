<?php
include_once 'verificacao.php';

verificaId(-1);
verificaNome("");
verificaEmail(".com");
verificaSenha("null");
verificaNascimento("21/21/1999");

echo "<br/>";

verificaId(0);
verificaNome("12346");
verificaEmail("teste@teste.com");
verificaSenha("blabl");
verificaNascimento("41/10/1999");

echo "<br/><br/>";

verificaId(1);
verificaNome("Teste");
verificaEmail("teste@gmail.com");
verificaSenha("blabla");
verificaNascimento("10/12/1999");

?>