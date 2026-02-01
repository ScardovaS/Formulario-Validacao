const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const sobrenome = document.getElementById('sobrenome');
const nascimento = document.getElementById('nascimento');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha')
const btnCriar = document.getElementById('criar')
const mensagem = document.getElementById('mensagem')

function erroInput(input, msg) {
  input.classList.remove("sucesso");
  input.classList.add("erro");
  mensagem.className = "erro";
  mensagem.innerText = msg;
}

function sucessoInput(input) {
  input.classList.remove("erro");
  input.classList.add("sucesso");
}


    formulario.addEventListener("submit",(event) => {
        event.preventDefault()
        

        if(nome.value.trim() === ""){
           erroInput(nome,'Por favor digite seu nome') 
           return
        } else {
            sucessoInput(nome)
        }

        if(sobrenome.value.trim()===""){
            erroInput(sobrenome,'Por favor digite seu sobrenome') 
            return
        } else {
            sucessoInput (sobrenome)
        }

        const generoSelecionado = document.querySelector('input[name = "genero"]:checked')

        if(!generoSelecionado){
            mensagem.className = "erro";
            mensagem.innerText = "Por favor insira seu gênero";
            return
        }

        if(nascimento.value.trim()=== ""){
            erroInput(nascimento,'Por favor insira sua data de nascimento')
            return
        } else {
            sucessoInput(nascimento)
        }

        if (senha.value.trim()===""){
            erroInput(senha,'Por favor digite sua senha')
            return
        } else {
            sucessoInput(senha)
        }

        if  (confirmarSenha.value.trim() === ""){
            erroInput(confirmarSenha,'Por favor confirme sua senha')
            return
        } else if ( senha.value !== confirmarSenha.value){
            erroInput(confirmarSenha, "Por favor digite a senha corretamente")
            return
        } else {
            sucessoInput(confirmarSenha)
        }

        if (!email.value.includes("@")) {
            erroInput(email, 'Por favor digite um email válido')
            return
        } else {
            sucessoInput(email)
        }

        mensagem.classList = "sucesso";
        mensagem.innerText = 'Conta criada com sucesso!'

    formulario.reset();
     document.querySelector("input").forEach(input=> {
     input.classList.remove("sucesso")
     
     });
    });