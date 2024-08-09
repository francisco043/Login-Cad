# Login-Cad

## Validações Email e CPF
 
Nessa atividade aprendemos o funcionamento de códigos com JavaScript, desevolvendo projetos validando corretamente Email e CPF.
 
##
 
### CPF
 
Elementos utilizados no JavaScript da Validação do CPF:
 
| Elementos | Explicações |
| --- | --- |
| ``element`` | É uma referência a um objeto ``Element``, ou null se um elemento com o ID especificado não estiver contido neste documento.
| ``id`` |  É uma string que diferência maiúsculas e minúsculas representando o ID único do elemento sendo procurado.
| ``bubmit`` | O evento submit é disparado quando é feita a submissão de um `` <form> ``
| ``preventDefault``  | Cancela o evento se for cancelável, sem parar a propagação do mesmo.
| ``const``  | A declaração ``const`` cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
| ``value``  | Tem a finalidade de fazer com que o comando onde ele é usado, considere o valor do parâmetro passado e não o próprio parâmetro.
| ``textContent``  | A propriedade ``textContent`` da interface ``Node`` representa o conteúdo do texto de um nó e de seus descendentes.
| ``replace``  | O ``replace()`` método de ``String`` valores retorna uma nova string com uma, algumas ou todas as correspondências de a ``pattern`` substituídas por a ``replacement``.
| ``length``  | Cancela o evento se for cancelável, sem parar a propagação do mesmo.
 
## Explicações de códigos em partes:
 
### *Parte 1: Configuração do Escutador de Eventos*
 
| Elementos | Explicações |
| --- | --- |
| ``document.getElementById('cpfForm')`` | Aqui, o código seleciona o formulário com o ``id`` ``cpfForm``.
 
| ``.addEventListener('submit', function(event){event.preventDefault();`` | O evento de submissão do formulário é interceptado. O método event.``preventDefault()`` é chamado para evitar que o formulário seja enviado da maneira tradicional e recarregue a página.
 
| ``const cpf = document.getElementById('cpf').value;`` | O código obtém o valor do campo de entrada com o id cpf.
 
| ``const msg = document.getElementById('message');`` | O código obtém o elemento com o id message, onde será exibida a mensagem de validação.
 
| ``if(validarCPF(cpf)){msg.textContent = 'O CPF é válido!';msg.style.color = 'green';}else{msg.textContent ='O CPF é inválido!';msg.style.color = 'red';}`` | A função validarCPF é chamada com o valor do CPF. Dependendo do resultado (verdadeiro ou falso), a mensagem e a cor são ajustadas para indicar se o CPF é válido ou inválido.
 
### *Parte 2: Função de Validação do CPF*
 
| ``function validarCPF(cpf){cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos`` | O código remove todos os caracteres não numéricos da string de CPF, como pontos e hífens, para deixar apenas os dígitos.
 
 
| ``if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){return false;}`` | Verifica se o CPF tem exatamente 11 dígitos e se todos os dígitos são iguais. Se não atender a essas condições, o CPF é considerado inválido e a função retorna ``false``.
 
![](img/captura.png)
 
* Calcula a Soma Ponderada:
Itera sobre os 9 primeiros dígitos do CPF, calculando uma soma ponderada.
* Calcula o Resto e Verifica:
O resto da soma é calculado e ajustado para verificar o 10º dígito (primeiro dígito verificador). Se não coincidir com o dígito verificador, retorna ``false``.
 
##
 
### Email

## Função da validação de EMAIL
>Usuário precisa checar o E-mail e valida-lo, logo seguida enviar.
tem menu de contexto
 
Elementos utilizados no JavaScript da Validação do Email:


##
 

##
 
## Tecnologias
 
html
css
javascript

 
</div>
 
##
 
