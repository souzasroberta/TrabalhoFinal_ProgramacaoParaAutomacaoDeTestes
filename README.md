Serviço de Pagamento — Testes Unitários com Classe
Projeto desenvolvido como exemplo prático de testes unitários em JavaScript, utilizando classes ES6+ e o módulo nativo node:assert.

Sobre o Projeto
Este repositório foi criado como atividade da pós-graduação, com o objetivo de demonstrar como escrever testes unitários para uma classe JavaScript seguindo boas práticas de organização e estrutura de código.
A classe ServicoDePagamento simula um serviço de pagamentos bancários, com lógica de categorização automática baseada no valor da transação.

Estrutura do Projeto
servico-de-pagamento
 ┣ src
 ┃ ┗ servicoDePagamento.js       # Classe principal
 ┣ test
 ┃ ┗ servicoDePagamento.test.js  # Testes unitários
 ┣ .gitignore
 ┣ package.json
 ┗ README.md

Como a Classe Funciona
A classe ServicoDePagamento possui:
MétodoDescriçãopagar(codigoBarras, empresa, valor)Registra um pagamento na lista internaconsultarUltimoPagamento()Retorna o último pagamento registrado
Categorização automática
Ao realizar um pagamento, a categoria é preenchida automaticamente:
CondiçãoCategoriaValor acima de R$ 100,00caraValor igual ou abaixo de R$ 100,00padrão
Exemplo de uso
javascriptconst servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

console.log(servicoDePagamento.consultarUltimoPagamento());
// {
//   codigoBarras: '0987-7656-3475',
//   empresa: 'Samar',
//   valor: 156.87,
//   categoria: 'cara'
// }

Testes Unitários
Os testes seguem o padrão AAA (Arrange, Act, Assert) e cobrem os seguintes cenários:
#Cenário1Pagamento é salvo com codigoBarras, empresa e valor corretos2Pagamento com valor acima de R$ 100,00 recebe categoria cara3Pagamento com valor igual ou abaixo de R$ 100,00 recebe categoria padrão4consultarUltimoPagamento() retorna apenas o último pagamento






Contexto Acadêmico
Projeto desenvolvido como atividade prática de pós-graduação em Automação de Testes de Software proposta pelo professor Julio de Lima.