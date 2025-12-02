import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";

let paginaAtual = "";
let livro = {};
let bancoLivros = [];
let mensagemSistema = "";

Given("que o usuário está na página de cadastro de livros", function () {
  paginaAtual = "cadastro";
  livro = {};
  mensagemSistema = "";
});

Given("preenche o título {string}", function (titulo) {
  livro.titulo = titulo;
});

Given("preenche o autor {string}", function (autor) {
  livro.autor = autor;
});

Given("preenche o preço {string}", function (preco) {
  livro.preco = preco;
});

Given("seleciona a categoria {string}", function (categoria) {
  livro.categoria = categoria;
});

When("o usuário confirma o cadastro", function () {
  if (!livro.titulo || livro.titulo.trim() === "") {
    mensagemSistema = "Título é obrigatório";
    return;
  }

  if (isNaN(parseFloat(livro.preco))) {
    mensagemSistema = "Preço inválido";
    return;
  }

  bancoLivros.push(livro);
  mensagemSistema = "Livro cadastrado com sucesso";
});

Then("o sistema deve exibir a mensagem {string}", function (mensagemEsperada) {
  assert.strictEqual(mensagemSistema, mensagemEsperada);
});

Then("o sistema deve salvar o livro no banco de dados", function () {
  assert.ok(bancoLivros.includes(livro));
});
