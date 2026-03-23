const nome = "João";
const idade = 16;

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
const cidade = "São Paulo";

// Mensagem personalizada

// Função para verificar maioridade
function verificarIdade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade.";
  } else {
    return "Você é menor de idade.";
  }
}

console.log(verificarIdade(idade));

// Simulando ação
setTimeout(() => {
  console.log("Mensagem após 2 segundos...");
}, 2000);
