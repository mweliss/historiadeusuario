Feature: Cadastro de livro para venda
  Como usuário
  Quero cadastrar meu livro para venda
  Para que outras pessoas possam comprá-lo

  Scenario: Cadastro bem-sucedido de um livro
    Given que o usuário está na página de cadastro de livros
    And preenche o título "A Arte de Aprender"
    And preenche o autor "Josh Waitzkin"
    And preenche o preço "39.90"
    And seleciona a categoria "Educação"
    When o usuário confirma o cadastro
    Then o sistema deve exibir a mensagem "Livro cadastrado com sucesso"
    And o sistema deve salvar o livro no banco de dados

  Scenario: Cadastro inválido por campo obrigatório vazio
    Given que o usuário está na página de cadastro de livros
    And preenche o título ""
    And preenche o autor "Josh Waitzkin"
    And preenche o preço "39.90"
    And seleciona a categoria "Educação"
    When o usuário confirma o cadastro
    Then o sistema deve exibir a mensagem de erro "Título é obrigatório"
    And o livro não deve ser salvo

  Scenario: Cadastro inválido por preço no formato errado
    Given que o usuário está na página de cadastro de livros
    And preenche o título "A Arte da Guerra"
    And preenche o autor "Sun Tzu"
    And preenche o preço "trinta reais"
    And seleciona a categoria "Estratégia"
    When o usuário confirma o cadastro
    Then o sistema deve exibir a mensagem "Preço inválido"
    And o livro não deve ser salvo
