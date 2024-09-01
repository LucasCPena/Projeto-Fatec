document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const form = event.target;

    // Verifica se o formulário é válido
    if (!form.checkValidity()) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Se válido, você pode enviar o formulário ou processar os dados aqui
    alert('Cadastro realizado com sucesso!');
});

// Função para formatar CPF
function formatCPF(value) {
    return value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

// Função para formatar Telefone
function formatTelefone(value) {
    return value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
}

// Adiciona eventos de input para formatar CPF e Telefone
document.getElementById('cpf').addEventListener('input', function(event) {
    event.target.value = formatCPF(event.target.value);
});

document.getElementById('telefone').addEventListener('input', function(event) {
    event.target.value = formatTelefone(event.target.value);
});

document.getElementById('cartaoForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Coleta os valores dos campos
    const numeroCartao = document.getElementById('numeroCartao').value;
    const nomeTitular = document.getElementById('nomeTitular').value;
    const validade = document.getElementById('validade').value;
    const codigoSeguranca = document.getElementById('codigoSeguranca').value;

    // Valida o número do cartão (apenas um exemplo básico, idealmente deve usar uma API ou biblioteca específica)
    const numeroCartaoRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (!numeroCartaoRegex.test(numeroCartao)) {
        alert('Número do cartão inválido.');
        return;
    }

    // Valida a validade
    const validadeRegex = /^\d{2}\/\d{2}$/;
    if (!validadeRegex.test(validade)) {
        alert('Validade inválida. Use o formato MM/AA.');
        return;
    }

    // Valida o código de segurança
    const codigoSegurancaRegex = /^\d{3}$/;
    if (!codigoSegurancaRegex.test(codigoSeguranca)) {
        alert('Código de segurança inválido.');
        return;
    }

    // Se todas as validações passarem, mostra uma mensagem de sucesso
    alert('Cartão cadastrado com sucesso!');
});
