//ACESSAR O LOGIN E MANDAR PARA A PAGINA DO CADASTRO 

function acessar() {
   let loginEmail = document.getElementById('loginEmail').value;
   let loginSenha = document.getElementById('loginSenha').value;

   // VERIFICAR SE TODOS OS CAMPOS ESTAO PREENCHIDOS --------------------------------------

   if (!loginEmail || !loginSenha) {
      alert('favor preencher todos os campos');

   } else {
      // else{ alert('campos preenchisdos com sucesso'); }
      window.location.href = 'cadastro.html';
   }
}

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
//------------------------------------------------------------------------------------------------------------------------
var dadosLista = [];

// FUNCAO PARA SALVAR USUARIO NA LISTA

function salvarUser() {
   let nomeUser = document.getElementById('nomeUser').value;
   let emailUser = document.getElementById('emailUser').value;

   if (nomeUser && emailUser) {
      // ADICIONA NOME A LISTA 

      dadosLista.push(nomeUser, emailUser);
      //console.log(dadosLista);
      crialista();
      document.getElementById("nomeUser").value = "";
      document.getElementById("emailUser").value = "";
   } else {
      // LIMPA O CAMPO DE ENTRADA

      alert("favor informe um nome para cadastro");
   }

}

// FUNCAO PARA CRIAR LISTA DE USUARIOS ----------------------------------------------------------------------

// PEGA NOME DE AREY E COLOCA PARA NOME DE USUARIOS

// DEFINICAO DO TAMANHO AREY
// PEGA A POSICAO QUE ESTA O AREY 
function crialista() {
   let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Email Usuário</th><th> Ações </th></tr>";
   for (let i = 0; i <= (dadosLista.length - 2); i++) {
      tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + dadosLista[1] + "</td> <td><button type ='button' onclick = 'editar(parentNode.parentNode.rowIndex)'>editar</button ><button type ='button' onclick = 'excluir(parentNode.parentNode.rowIndex)'>excluir</button ></td ></tr ></td ></tr > ";
      document.getElementById('tabela').innerHTML = tabela;

   }
}

// FUNCAO PARA EDITAR NOME DE LISTA ----------------------------------------------------------------------------
function editar(i) {
   document.getElementById("nomeUser").value = dadosLista[(i - 1)];
   dadosLista.splice(dadosLista[(i - 1)], 1);
}

// FUNCAO PARA EXCLUIR NOME DE LISTA -----------------------------------------------------------------------------------------

function excluir (i){
   dadosLista.splice((i - 1), 1);

   document.getElementById("tabela").deleteRow(i);
}
