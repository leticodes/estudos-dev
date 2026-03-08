const nome = "Letícia";
const idade = 28;
const altura = 1.51;
const estudante = true;

console.log("Meu nome é " +nome+ " e eu tenho " +idade+ " anos");
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
console.log("Letícia é estudante?", estudante);

console.log("____________________________");

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Altura: ", altura);

console.log("____________________________");

const preco = 100;
const desconto = 20;
const total = preco - desconto;

console.log("O valor final é: ", total);
console.log(`O valor sem desconto é: ${preco}`);

console.log("____________________________");

const maiorDeIdade = idade >= 18;

console.log(nome + " é maior de idade? " + maiorDeIdade);

console.log("____________________________");

const podeDirigir = idade >= 18;
console.log("Letícia pode dirigir? ", podeDirigir);

console.log("____________________________");

const podeEntrarNoEvento = maiorDeIdade && estudante;
console.log("Letícia pode entrar no evento? ", podeEntrarNoEvento);

console.log("____________________________");

const acompanhada = false;
const podeEntrarNoCinema = acompanhada || maiorDeIdade;

console.log("Letícia pode entrar no cinema? ", podeEntrarNoCinema);

console.log("____________________________");

const saldo = 50;
const temSaldo = saldo >= preco;
const naoTemSaldo = !temSaldo;

console.log("Letícia NÃO tem saldo suficiente? ", naoTemSaldo);

console.log("____________________________");

const estaLogada = true;
const naoEstaLogada = !estaLogada;

console.log("Letícia não está logada? ", naoEstaLogada);

console.log("____________________________");

const portaAberta = false;
const portaFechada = !portaAberta;

console.log("A porta está fechada? ", portaFechada);

console.log("____________________________");

if (portaFechada) {
    console.log("Acesso bloqueado");
} else {
console.log("Acesso liberado");
};

console.log("____________________________");

if (estudante) {
    console.log("Desconto aplicado");
} else {
    console.log("Sem desconto");
};

console.log("____________________________");

if (idade < 12) {
    console.log(nome + " é Criança");
} else if (idade < 18) {
    console.log(nome + " é Adolescente");
} else {
    console.log(nome + " é Adulto");
};

console.log("____________________________");

const nota = 6;

if (nota <5) {
    console.log(nome + " está reprovada");
} else if (nota >= 5 && nota < 7) {
    console.log(nome + " está em recuperação");
} else {
    console.log(nome + " está aprovada");
};

console.log("____________________________");

const matriculaAtiva = false;
const pagamentoEmDia = false;
const acessoTemporario = true;

if (matriculaAtiva && pagamentoEmDia || acessoTemporario) {
    console.log(nome + " pode acessar o curso");
} else {
    console.log(" Acesso bloqueado");
};

console.log("____________________________");