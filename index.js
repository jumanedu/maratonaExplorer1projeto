//variaveis?
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#bottonPerguntar")
const respostas = [
  "Não tenho certeza",
  "Certeza",
  "É decididamente assim",
  "Não conte com isso",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente",
  "Minha resposta é não",
  "Voçe pode contar com isso",
  "Minhas fontes dizem não",
  "Provavelmente",
  "Não é possível prever agora",
  "Perpectiva boa",
  "As perpectivas não são tão boas",
  "Sim.",
  "Concentre-se e pergunte novamente",
  "Sinais apontam que sim.",
]
//console.log(numeroAleatorio)
//clicar para fazer a pergunta

function fazerPergunta() {

   if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
   }
   buttonPerguntar.setAttribute("disabled" , true)

   const pergunta = "<div>" + inputPergunta.value + "</div>"
  //Gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;
//sumir a resposta depois de 3 segundos

setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
}, 3000)


}



// dados de entrada?
//dados de saida

