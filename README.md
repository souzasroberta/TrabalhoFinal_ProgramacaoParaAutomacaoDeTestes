# Servico de Pagamento — Testes Unitarios com Classe

Projeto desenvolvido como exemplo pratico de testes unitarios em JavaScript, utilizando o modulo `node:assert`.

---

## Sobre o Projeto

Este repositorio foi criado como atividade da pos-graduacao, com o objetivo de demonstrar como escrever testes unitarios para uma classe JavaScript seguindo boas praticas de organizacao e estrutura de codigo.

A classe `ServicoDePagamento` simula um servico de pagamentos bancarios, com logica de categorizacao automatica baseada no valor da transacao.

---

## Estrutura do Projeto

```
servico-de-pagamento
┣ src
┃ ┗ servicoDePagamento.js       # Classe principal
┣ test
┃ ┗ servicoDePagamento.test.js  # Testes unitarios
┣ .gitignore
┣ package.json
┗ README.md
```

---

## Como a Classe Funciona

A classe `ServicoDePagamento` possui:

| Metodo | Descricao |
|---|---|
| `pagar(codigoBarras, empresa, valor)` | Registra um pagamento na lista interna |
| `consultarUltimoPagamento()` | Retorna o ultimo pagamento registrado |

### Categorizacao automatica

Ao realizar um pagamento, a categoria e preenchida automaticamente:

| Condicao | Categoria |
|---|---|
| Valor acima de R$ 100,00 | `cara` |
| Valor igual ou abaixo de R$ 100,00 | `padrao` |

### Exemplo de uso

```javascript
const servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

console.log(servicoDePagamento.consultarUltimoPagamento());
// {
//   codigoBarras: '0987-7656-3475',
//   empresa: 'Samar',
//   valor: 156.87,
//   categoria: 'cara'
// }
```

---

## Testes Unitarios

Os testes seguem o padrao AAA (Arrange, Act, Assert) e cobrem os seguintes cenarios:

| # | Cenario |
|---|---|
| 1 | Pagamento e salvo com `codigoBarras`, `empresa` e `valor` corretos |
| 2 | Pagamento com valor acima de R$ 100,00 recebe categoria `cara` |
| 3 | Pagamento com valor igual ou abaixo de R$ 100,00 recebe categoria `padrao` |
| 4 | `consultarUltimoPagamento()` retorna apenas o ultimo pagamento |

---

## Contexto Academico

Projeto desenvolvido como atividade pratica de pos-graduacao em Automacao de Testes de Software proposta pelo professor Julio de Lima.
