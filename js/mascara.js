document.getElementById('rg').addEventListener('input', function () {
    let valor = this.value;
    let formatado = '';
    let numeros = '';
    
    // Remover caracteres não numéricos
    for (let char of valor) {
        if (!isNaN(char) && char !== ' ') {
            numeros += char;
        }
    }

    // Adicionar formatação de RG
    for (let i = 0; i < numeros.length; i++) {
        if (i === 2 || i === 5) {
            formatado += '.';
        } else if (i === 8) {
            formatado += '-';
        }
        formatado += numeros[i];
    }
    this.value = formatado;
});

// Função para formatar o CEP
document.getElementById('cep').addEventListener('input', function () {
    let valor = this.value;
    let formatado = '';
    let numeros = '';

    // Remover caracteres não numéricos
    for (let char of valor) {
        if (!isNaN(char) && char !== ' ') {
            numeros += char;
        }
    }

    // Adicionar formatação de CEP
    for (let i = 0; i < numeros.length; i++) {
        if (i === 5) {
            formatado += '-';
        }
        formatado += numeros[i];
    }
    this.value = formatado;
});

// Função para formatar o CPF
document.getElementById('cpf').addEventListener('input', function () {
    let valor = this.value;
    let formatado = '';
    let numeros = '';

    // Remover caracteres não numéricos
    for (let char of valor) {
        if (!isNaN(char) && char !== ' ') {
            numeros += char;
        }
    }

    // Adicionar formatação de CPF
    for (let i = 0; i < numeros.length; i++) {
        if (i === 3 || i === 6) {
            formatado += '.';
        } else if (i === 9) {
            formatado += '-';
        }
        formatado += numeros[i];
    }
    this.value = formatado;
});

// Função para formatar o Celular
document.getElementById('telefone').addEventListener('input', function () {
    let valor = this.value;
    let formatado = '';
    let numeros = '';

    // Remover caracteres não numéricos
    for (let char of valor) {
        if (!isNaN(char) && char !== ' ') {
            numeros += char;
        }
    }

    // Adicionar formatação de Celular
    for (let i = 0; i < numeros.length; i++) {
        if (i === 0) {
            formatado += '(';
        } else if (i === 2) {
            formatado += ') ';
        } else if (i === 7) {
            formatado += '-';
        }
        formatado += numeros[i];
    }
    this.value = formatado;
});