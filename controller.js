function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
  
       if(!loginEmail || !loginSenha){
          alert('favor preencher todos os campos');
  
       }else{
        // else{ alert('campos preenchisdos com sucesso'); }
        window.location.href = 'cadastro.html';
       }
 }
  
 // FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
 //------------------------------------------------------------------------------------------------------------------------
 var dadosLista = [];
 function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    
    if (nomeUser){
         dadosLista.push(nomeUser);
         console.log(dadosLista);
    }else{
        alert("favor informe um nome para cadastro");
    }

 }
 


