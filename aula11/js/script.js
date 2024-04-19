
function Validar() {
    const nome = document.getElementById("txtNome");
    const erroNome = document.getElementById("erroNome");
    const CPF = document.getElementById("txtCPF");
    const erroCPF = document.getElementById("erroCPF");
    const form = document.getElementById("frmCadastro");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    if (nome.value == '') {
        nome.focus()
        erroNome.innerText = "Campo obrigatório";
        return false; // return false retorna um valor a função, serve como um break, para não executar o restante do código.
    } else {
        erroNome.innerText = '';
    }
    if (CPF.value == '') {
        CPF.focus()
        erroCPF.innerText = "Campo obrigatório";
        return false;
    } else {
        erroCPF.innerText = '';
    }
} 

function Mascara(campo, formato) {
    if (formato == 'cpf') {
        separador1='.';
        separador2='-';
        tamanho1=3; //123.
        tamanho2=7; //123.456.
        tamanho3=11; //123.456.789-
        if (campo.value.length == tamanho1) {
            campo.value += separador1 // 123 + '.'
        } else if (campo.value.length == tamanho2) {
            campo.value+=separador1 // 123.456 + '.'
        } else if (campo.value.length == tamanho3) {
            campo.value+=separador2 // 123.456.789 + '-'
        }
    }
    if (formato == 'tel') {
        separador1='(';
        separador2=') ';
        separador3='-';
        tamanho1=0; //(
        tamanho2=3; //(11) 
        tamanho3=10; //(11) 93849-
        if (campo.value.length == tamanho1) {
            campo.value += separador1 // '(' + 11
        } else if (campo.value.length == tamanho2) {
            campo.value+=separador2 // (11 + ') '
        } else if (campo.value.length == tamanho3) {
            campo.value+=separador3 // (11) 98734 + '-'
        }
    }
    if (formato == 'cep') {
        separador1='-';
        tamanho1=5; //04144-
        if (campo.value.length == tamanho1) {
            campo.value += separador1 // '(' + 11
        }
    }
}

// criar mais um campo de cep