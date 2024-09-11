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
        let cep = inputCep.value;
        
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
                        nr.value = data.unidade || '';
                        uf.value = data.uf || '';
                    } else {
                        console.error('CEP não encontrado.');
                    }
                })
                .catch(er => console.error(er));
        }
    });
}
