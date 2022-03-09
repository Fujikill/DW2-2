/* Função Validar */
function validar() {
     // pegando o valor do nome pelos names
   var nome = document.getElementById("nome");
    var data = document.getElementById("data-nascimento");
    var cpf = document.getElementById("cpf");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var estado = document.getElementById("estado");
    var curso = document.getElementById("curso");
    
    // verificar se o nome está vazio
    if (nome.value == "") {
      alert("Nome não informado");
  
      // Deixa o input com o focus
      nome.focus();
      // retorna a função e não olha as outras linhas
      return;
    }
    if ( data.value == "") {
      alert("data-nascimento não informado");
      data.focus();
      return;
    }
    if (cpf.value == "") {
      alert("cpf não informado");
      cpf.focus();
      return;
    }
    if (email.value == "") {
      alert("email não informada");
      email.focus();
      return;
    }
    if (telefone.value == "") {
      alert("Telefone não informado");
      telefone.focus();
      return;
    }
    if (estado.value == "") {
      alert("estado não informado");
      estado.focus();
      return;
    }
    if (curso.value == "") {
      alert("Curso não informado");
      curso.focus();
      return;
    }  
    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
  }