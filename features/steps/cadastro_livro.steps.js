import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";

let livro = {};
let banco = [];
let mensagem = "";

Given("que o usuário acessa a página de cadastro de livros", function () {
  livro = {};
  mensagem = "";
});

Given("informa o título {string}", function (titulo) {
  livro.titulo = titulo;
});

Given("deixa o campo de título vazio", function () {
  livro.titulo = "";
});

Given("informa o autor {string}", function (autor) {
  livro.autor = autor;
});

Given("informa o preço {string}", function (preco) {
  livro.preco = preco;
});

Given("informa a categoria {string}", function (categoria) {
  livro.categoria = categoria;
});

When("o usuário confirma o cadastro", function () {
  validarCadastro();
});

When("o usuário tenta confirmar o cadastro", function () {
  validarCadastro();
});

function validarCadastro() {
  if (!livro.titulo || livro.titulo.trim() === "") {
    mensagem = "Título é obrigatório";
    return;
  }

  const precoNum = Number(livro.preco);

  if (isNaN(precoNum) || precoNum <= 0) {
    mensagem = "Preço inválido";
    return;
  }

  banco.push(livro);
  mensagem = "Livro cadastrado com sucesso!";
}

Then("o sistema deve salvar o livro", function () {
  assert.ok(banco.includes(livro));
});

Then("não deve salvar o livro", function () {
  assert.ok(!banco.includes(livro));
});

Then("exibir a mensagem {string}", function (mensagemEsperada) {
  assert.strictEqual(mensagem, mensagemEsperada);
});
