<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ipi_2";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn) {
        die("Erro no Banco de Dados: ". mysqli_connect_error());
    }

    $insert = "Nome, RG, CPF, DataNasc, Email, Telefone, CEP, Rua, Comp, Bairro, Cidade, Numero, UF, Assunto, Mensagem, Senha"
?>