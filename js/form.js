window.onload = function () {
    // Pegar o elemento do campo de CEP
    let inputCep = document.querySelector("#cep");
    // Pegar os elementos dos campos de endereço
    let endereco = document.getElementById("endereco");
    let complemento = document.getElementById("complemento");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let nr = document.querySelector("#nr");
    let uf = document.getElementById("uf");

    // Evento de input no campo de CEP
    inputCep.addEventListener("input", () => {
        let cep = inputCep.value.replace(/\D/g, '');
        
        // Verifica se o CEP tem o comprimento correto
        if (cep.length === 8) {
            let servidor = `https://viacep.com.br/ws/${cep}/json/`;
            
            fetch(servidor)
                .then(response => response.json())
                .then(data => {
                    // Verifica se a resposta contém um erro
                    if (!data.erro) {
                        endereco.value = data.logradouro || '';
                        complemento.value = data.complemento || '';
                        bairro.value = data.bairro || '';
                        cidade.value = data.localidade || '';
                        // O campo de número pode não ser fornecido pela API
                        nr.value = ''; // Deixe o campo vazio ou configure conforme necessário
                        uf.value = data.uf || '';
                    } else {
                        console.error('CEP não encontrado.');
                        // Opcional: Mostrar uma mensagem de erro para o usuário
                        endereco.value = '';
                        complemento.value = '';
                        bairro.value = '';
                        cidade.value = '';
                        uf.value = '';
                    }
                })
                .catch(er => {
                    console.error(er);
                    // Opcional: Mostrar uma mensagem de erro para o usuário
                    endereco.value = '';
                    complemento.value = '';
                    bairro.value = '';
                    cidade.value = '';
                    uf.value = '';
                });
        }
    });
}
