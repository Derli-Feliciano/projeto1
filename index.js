const nome = "João";
const idade = 16;
const cidade = "São Paulo";

// Mensagem personalizada
console.log(`Olá, ${nome}!`);
console.log(`Você tem ${idade} anos e mora em ${cidade}.`);

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
