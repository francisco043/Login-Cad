function acessar() {
   let loginEmail = document.getElementById('loginEmail').value;
   let loginSenha = document.getElementById('loginSenha').value;
   
   if (!loginEmail || !loginSenha) {
      alert('favor preencher todos os campos');

   } else {
      // else{ alert('campos preenchisdos com sucesso'); }
      window.location.href = 'cadastro.html';
   }

   var dadosLista = [];
   function salvarUser() {
      let nomeUser = document.getElementById('nomeUser').value;
   
      if (nomeUser) {
         dadosLista.push(nomeUser);
         //console.log(dadosLista);
         crialista();
         document.getElementById("nomeUser").value = "";
      } else {
         alert("favor informe um nome para cadastro");
      }
   
   }
   function crialista() {
      let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th> Ações </th></tr>";
      for (let i = 0; i <= (dadosLista.length - 1); i++) {
         tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type ='button' onclick = 'editar(parentNode.parentNode.rowIndex)'>editar</button ><button type ='button' onclick = 'excluir(parentNode.parentNode.rowIndex)'>excluir</button ></td ></tr ></td ></tr > ";
         document.getElementById('tabela').innerHTML = tabela;
   
      }
   }
   