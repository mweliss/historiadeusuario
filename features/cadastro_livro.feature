Funcionalidade: Cadastro de livros
  Como usuário
  Quero cadastrar meu livro para venda
  Para que ele fique disponível para outras pessoas comprarem

  Cenário: Usuário cadastra um livro com dados válidos
    Dado que o usuário acessa a página de cadastro de livros
    E informa o título "Aprender de Coração"
    E informa o autor "Corita Kent"
    E informa o preço "39.90"
    E informa a categoria "Arte"
    Quando o usuário confirma o cadastro
    Então o sistema deve salvar o livro
    E exibir a mensagem "Livro cadastrado com sucesso!"

  Cenário: Usuário tenta cadastrar um livro sem título
    Dado que o usuário acessa a página de cadastro de livros
    E deixa o campo de título vazio
    E informa o autor "Corita Kent"
    E informa o preço "39.90"
    E informa a categoria "Arte"
    Quando o usuário tenta confirmar o cadastro
    Então o sistema deve exibir a mensagem "Título é obrigatório"
    E não deve salvar o livro

  Cenário: Usuário tenta cadastrar um livro com preço inválido
    Dado que o usuário acessa a página de cadastro de livros
    E informa o título "Aprender de Coração"
    E informa o autor "Corita Kent"
    E informa o preço "-10"
    E informa a categoria "Arte"
    Quando o usuário tenta confirmar o cadastro
    Então o sistema deve exibir a mensagem "Preço inválido"
    E não deve salvar o livro
