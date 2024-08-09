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
   