let envia = () => {
    // Obtenha o formulário
    let form = document.getElementById("frm");

    // Função de validação
    const validarCampo = (campo, regex, mensagem) => {
        if (!regex.test(campo)) {
            alert(mensagem);
            return false;
        }
        return true;
    };

    // Obtenha os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const rg = document.getElementById('rg').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const complemento = document.getElementById('complemento').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const nr = document.getElementById('nr').value.trim();
    const uf = document.getElementById('uf').value;
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validações
    if (nome === '') {
        alert('Por favor, preencha o nome completo.');
    } else if (!validarCampo(rg, /^\d{2}\.\d{3}\.\d{3}-\d{1}$/, 'RG inválido. O formato correto é XX.XXX.XXX-X.')) {
    } else if (!validarCampo(cpf, /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido. O formato correto é XXX.XXX.XXX-XX.')) {
    } else if (!validarCampo(telefone, /^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido. O formato correto é (XX) XXXXX-XXXX.')) {
    } else if (!validarCampo(cep, /^\d{5}-\d{3}$/, 'CEP inválido. O formato correto é XXXXX-XXX.')) {
    } else if (!validarCampo(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail inválido.')) {
    } else if (endereco === '') {
        alert('Por favor, preencha o endereço.');
    } else if (bairro === '') {
        alert('Por favor, preencha o bairro.');
    } else if (cidade === '') {
        alert('Por favor, preencha a cidade.');
    } else if (nr === '') {
        alert('Por favor, preencha o número.');
    } else if (uf === 'Escolha seu Estado') {
        alert('Por favor, escolha um estado.');
    } else if (assunto === '') {
        alert('Por favor, preencha o assunto.');
    } else if (mensagem === '') {
        alert('Por favor, preencha a mensagem.');
    } else if (senha === '') {
        alert('Por favor, preencha a senha.');
    } else {
        // Se todas as validações passarem, configura o formulário e o submete
        form.action = "proc.php";
        form.method = "post";
        form.submit();
    }
};
