<?php

include("banco.php");

// Variáveis via POST
$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$cpf = $_POST["cpf"];
$rg = $_POST["rg"];
$data = $_POST["datanasc"];
$assunto = $_POST["assunto"];
$mensagem = $_POST["mensagem"];
$senha = $_POST["senha"];
$cep = $_POST["cep"];
$rua = $_POST["endereco"];
$cidade = $_POST["cidade"];
$bairro = $_POST["bairro"];
$numero = $_POST["nr"];
$uf = $_POST["uf"];
$complemento = $_POST["complemento"];

// Prepare the SQL statement
$sql = "INSERT INTO usuarios (Nome, RG, CPF, DataNasc, Email, Celular, CEP, Rua, Comp, Bairro, Cidade, Numero, UF, Assunto, Mensagem, Senha) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = mysqli_prepare($conn, $sql);

if ($stmt) {
    // Bind parameters
    mysqli_stmt_bind_param($stmt, "ssssssssssssssss", $nome, $rg, $cpf, $data, $email, $telefone, $cep, $rua, $complemento, $bairro, $cidade, $numero, $uf, $assunto, $mensagem, $senha);
    
    // Execute the statement
    if (mysqli_stmt_execute($stmt)) {
        echo "Dados cadastrados com sucesso";
    } else {
        echo "Erro no cadastro: " . mysqli_error($conn);
    }

    // Close the statement
    mysqli_stmt_close($stmt);
} else {
    echo "Erro na preparação da consulta: " . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);

?>
