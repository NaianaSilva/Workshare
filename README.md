# Workshare

Workshare é um protótipo de plataforma web projetado para conectar profissionais e empresas a espaços de trabalho flexíveis. A aplicação permite que usuários encontrem e reservem escritórios, salas de reunião e espaços de coworking (mesas compartilhadas), enquanto anfitriões podem anunciar seus locais disponíveis para gerar uma fonte de renda adicional.

Este projeto, simula a experiência completa de um serviço de compartilhamento de espaços de trabalho, com foco na interface do usuário e no fluxo de navegação.

---

## 🚀 Principais Funcionalidades

O Workshare foi desenvolvido com um conjunto completo de funcionalidades tanto para quem busca um espaço (usuário) quanto para quem oferece (anfitrião).

### Para Usuários:
* **Cadastro e Login:** Sistema de autenticação para acesso à plataforma.
* **Busca e Descoberta:**
    * Página inicial com busca por localização, data e número de pessoas.
    * Exibição de espaços em destaque, com filtros por categoria (Escritórios, Salas de Reunião, etc.).
    * Página de pesquisa avançada com filtros por faixa de preço, tipo de espaço e comodidades (Wi-Fi, Ar-condicionado, etc.).
* **Visualização de Espaços:**
    * Página de apresentação detalhada com galeria de fotos, descrição completa, preço e informações do anfitrião.
* **Sistema de Reserva:**
    * Interface para selecionar data, horário e número de pessoas, com resumo do valor total.
    * Após a conclusão, o usuário pode avaliar a experiência, atribuindo uma nota e deixando um comentário.
* **Painel do Usuário (Dashboard):**
    * Central para gerenciar atividades.
    * Visualização de "Minhas Reservas" com status (Confirmada, Pendente, Concluída).
    * Acesso a "Minhas Avaliações" feitas anteriormente.
    * Edição de informações do perfil, como nome, e-mail e telefone.
    * Seção de notificações para atualizações de reservas e pagamentos.

### Para Anfitriões:
* **Gestão de Anúncios:**
    * Formulário para "Adicionar Novo Espaço", com campos para nome, descrição, localização, tipo, comodidades e fotos.
    * Painel "Meus Anúncios" para visualizar e gerenciar os espaços cadastrados, com status de "Ativo" ou "Pausado".
    * Opção para editar todas as informações de um anúncio existente, incluindo preço, capacidade e imagens.
* **Painel do Anfitrião:**
    * O dashboard principal exibe um resumo de anúncios ativos, reservas pendentes e avaliações recentes.

---

## 📄 Visão Geral das Páginas

O projeto é composto pelas seguintes páginas HTML estáticas que simulam a navegação e funcionalidades da plataforma:

* `home.html`: Página inicial com busca principal e espaços em destaque.
* `pesquisar.html`: Página de resultados de busca com filtros avançados.
* `apresentacao.html`: Detalhes de um espaço específico.
* `reserva.html`: Página para o processo de reserva.
* `avaliar.html`: Formulário para avaliar uma reserva concluída.
* `login.html` / `cadastro.html`: Páginas de autenticação.
* `dashboard.html`: Painel central do usuário/anfitrião.
* `adicionarEspaco.html`: Formulário para criar um novo anúncio.
* `meusAnuncios.html`: Listagem dos anúncios de um anfitrião.
* `minhasReservas.html`: Histórico de reservas de um usuário.
* `minhasAvaliacoes.html`: Histórico de avaliações de um usuário.
* `editarPerfil.html` / `editarAnuncio.html`: Formulários de edição.
* `sobre.html`: Página institucional sobre a empresa, missão e equipe.
* `notificacoes.html`: Página para exibir notificações ao usuário.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é focado no frontend e utiliza as seguintes tecnologias:

* **HTML5:** Estrutura e semântica de todas as páginas.
* **CSS3:** Estilização, layout (Flexbox, Grid) e responsividade.
* **JavaScript:** Interatividade, manipulação do DOM e simulação de funcionalidades dinâmicas.
* **Google Fonts:** Para as fontes *Roboto*, *Inter* e *Montserrat*.
* **Bootstrap Icons & Font Awesome:** Para a iconografia utilizada em toda a aplicação.

---

## ⚙️ Como Executar

Por ser um projeto frontend estático, não é necessário um servidor ou processo de compilação. Para visualizar o projeto:

1.  **Clone o repositório** para sua máquina local.
    ```sh
    git clone https://github.com/NaianaSilva/Workshare.git
    ```
2.  **Navegue até o diretório do projeto.**
    ```sh
    cd Workshare
    ```
3.  **Abra o arquivo principal em seu navegador.**
    A página inicial para começar a navegação é a `home.html`. Você pode abrir o seguinte arquivo diretamente no seu navegador de preferência:
    `app/templates/home.html`

---

## 📂 Estrutura do Projeto

└── Workshare-main/
├── app/
│   ├── static/
│   │   ├── assets/       # Ícones e logos
│   │   ├── css/          # Arquivos de estilização
│   │   ├── imagens/      # Imagens utilizadas nas páginas
│   │   └── js/           # Scripts para interatividade
│   └── templates/      # Arquivos HTML da aplicação
└── README.md           # Este arquivo

*Desenvolvido com ❤️ por Andressa e Naiana.*