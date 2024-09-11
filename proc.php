<?php

    include("banco.php");

    //variavéis via url
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $CPF = $_POST["cpf"];
    $RG = $_POST["rg"];
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

    $sql = "INSERT INTO usuarios ($insert) VALUES ('$nome', '$RG', '$CPF', '$data', '$email', '$telefone', '$cep', '$rua', '$complemento', '$bairro', '$cidade', '$numero', '$uf', '$assunto', '$mensagem', '$senha')";

    if (mysqli_query($conn, $sql)) {
        echo "Endereço cadastrado";
    }
    else {
        echo "Erro no cadastro";
    }

    mysqli_close($conn);

?>