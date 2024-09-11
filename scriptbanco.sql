
CREATE DATABASE ipi_2,

USE ipi_2,

CREATE TABLE usuarios(

   Id_Cadastro INT PRIMARY KEY AUTO_INCREMENT ,
   CEP VARCHAR(10) NOT NULL,
   Rua VARCHAR (100) NOT NULL,
   Numero VARCHAR(4) NOT NULL,
   Comp VARCHAR(60) NOT NULL,
   Bairro VARCHAR(100) NOT NULL,
   Cidade VARCHAR(100) NOT NULL,
   UF CHAR(2) NOT NULL,
   Nome varchar(50) NOT NULL,
   DataNasc date NOT NULL,
   Email varchar(50) NOT NULL,
   Celular varchar(11) NOT NULL,
   Assunto varchar(30) NOT NULL,
   Mensagem varchar(125) NOT NULL,
   Senha varchar NOT NULL,
   CPF varchar(11) NOT NULL,
   RG varchar(9) NOT NULL
);
