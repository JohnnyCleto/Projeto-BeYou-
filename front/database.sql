-- ==========================================
-- TABELA USUÁRIO (base para clientes e lojas)
-- ==========================================
CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    nome_social VARCHAR(200),
    data_nascimento DATE,
    cpf VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    genero VARCHAR(20),
    rg VARCHAR(20),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    senha VARCHAR(100) NOT NULL,
    tipo ENUM('cliente','loja') NOT NULL DEFAULT 'cliente', -- define se é loja ou cliente
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- PERFIL EXTRA PARA LOJA (dados específicos)
-- ==========================================
CREATE TABLE Loja (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    nome_fantasia VARCHAR(200) NOT NULL,
    cnpj VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- ==========================================
-- CATEGORIAS (para serviços e itens)
-- ==========================================
CREATE TABLE Categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

-- ==========================================
-- SERVIÇOS
-- ==========================================
CREATE TABLE Servico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    loja_id INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    duracao_min INT,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (loja_id) REFERENCES Loja(id)
);

-- ==========================================
-- ITENS/PRODUTOS
-- ==========================================
CREATE TABLE Item (
    id INT PRIMARY KEY AUTO_INCREMENT,
    loja_id INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (loja_id) REFERENCES Loja(id)
);

-- ==========================================
-- RELAÇÃO N:N SERVIÇO x CATEGORIA
-- ==========================================
CREATE TABLE ServicoCategoria (
    servico_id INT,
    categoria_id INT,
    PRIMARY KEY (servico_id, categoria_id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

-- ==========================================
-- RELAÇÃO N:N ITEM x CATEGORIA
-- ==========================================
CREATE TABLE ItemCategoria (
    item_id INT,
    categoria_id INT,
    PRIMARY KEY (item_id, categoria_id),
    FOREIGN KEY (item_id) REFERENCES Item(id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

-- ==========================================
-- CARRINHO (N:N usuário x item/serviço)
-- ==========================================
CREATE TABLE Carrinho (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE CarrinhoItem (
    carrinho_id INT,
    item_id INT,
    quantidade INT DEFAULT 1,
    PRIMARY KEY (carrinho_id, item_id),
    FOREIGN KEY (carrinho_id) REFERENCES Carrinho(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

CREATE TABLE CarrinhoServico (
    carrinho_id INT,
    servico_id INT,
    quantidade INT DEFAULT 1,
    PRIMARY KEY (carrinho_id, servico_id),
    FOREIGN KEY (carrinho_id) REFERENCES Carrinho(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);

-- ==========================================
-- AGENDAMENTO (usuário agenda serviço)
-- ==========================================
CREATE TABLE Agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    servico_id INT NOT NULL,
    data_horario DATETIME NOT NULL,
    status ENUM('pendente','confirmado','cancelado','concluido') DEFAULT 'pendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);

-- ==========================================
-- FAVORITOS (N:N)
-- ==========================================
CREATE TABLE UsuarioFavoritoLoja (
    usuario_id INT,
    loja_id INT,
    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (usuario_id, loja_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES Loja(id)
);

CREATE TABLE UsuarioFavoritoServico (
    usuario_id INT,
    servico_id INT,
    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (usuario_id, servico_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);

-- ==========================================
-- NOTIFICAÇÕES
-- ==========================================
CREATE TABLE Notificacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    mensagem TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE UsuarioNotificacao (
    usuario_id INT,
    notificacao_id INT,
    lida BOOLEAN DEFAULT FALSE,
    data_leitura DATETIME,
    PRIMARY KEY (usuario_id, notificacao_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (notificacao_id) REFERENCES Notificacao(id)
);
