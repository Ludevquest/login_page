# Projeto Login

## 🚀 Sobre o projeto
Este projeto consiste em um sistema de login e cadastro de usuários com redirecionamento para um dashboard. <br>

Ele utiliza HTML5, CSS3 e JavaScript para a interface e o armazenamento local (`localStorage`) para simular a autenticação do usuário. 

Para fins de demonstração, o `json-server` é utilizado para simular uma API RESTful.

## 🎨 Protótipo
O protótipo do sistema inclui três páginas principais:
1. **Página de Login** - Permite que usuários existentes façam login.
2. **Página de Cadastro** - Permite que novos usuários se registrem.
3. **Dashboard** - Exibe um gráfico e uma tabela dinâmica após o login bem-sucedido.

## 💻 Implementação
### Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização das páginas.
- **JavaScript**: Lógica de validação, autenticação e manipulação do DOM.
- **json-server**: Simulação de uma API RESTful.
- **Chart.js**: Criação de gráficos dinâmicos.
- **DataTables**: Criação de tabelas dinâmicas.

### Estrutura do Projeto

- `index.html`: Página de login.
- `signup.html`: Página de cadastro.
- `dashboard.html`: Página de dashboard.
- `public/css/styles.css`: Arquivo de estilos CSS.
- `js/script.js`: Arquivo de scripts JavaScript.
- `db.json`: Arquivo de banco de dados para `json-server`.

### Funcionalidades

- **Login e Cadastro**: Validação dos campos e armazenamento do estado de autenticação usando `localStorage`.
- **Redirecionamento**: Usuário é redirecionado para o dashboard após login/cadastro bem-sucedido.
- **Dashboard**: Exibe um gráfico de barras e uma tabela dinâmica com dados dos usuários.

## 👏 Resultado
O sistema permite que os usuários façam login e cadastro. <br>
Após o login, o usuário é redirecionado para um dashboard que exibe um gráfico e uma tabela dinâmica. <br>
O projeto demonstra a integração de diferentes tecnologias para criar uma aplicação web funcional e interativa.

### Imagem do Dashboard

![Dashboard](path/to/dashboard-screenshot.png)

## ⚙️ Execução
### Pré-requisitos

- Node.js e npm instalados.
- json-server instalado globalmente:
  ```sh
  npm install -g json-server

Desenvolvido por <a href="https://github.com/Ludevquest"> Lu Dev Quest</a>.
