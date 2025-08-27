# 💻 Projeto Aurea

## Projeto desenvolvido principalmente com:

- React Vite
- Typescript
- TailwindCSS
- Shadcn Ui

## 📂 Como rodar o projeto em servidor local

```bash
# Clone o repositório
git clone https://github.com/lucasMenezesM/projeto-aurea.git

# Acesse a pasta do projeto
cd projeto-aurea

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

```

### Dessa forma o projeto estará rodando em:

- 👉 localhost:5173

## Tecnologias usadas:

| Tecnologia           | Versão   | Descrição                                                         |
| -------------------- | -------- | ----------------------------------------------------------------- |
| **React**            | 19.1.0   | Biblitoeca Principal utilizada para desenvolver a aplicação       |
| **Typescript**       | 5.3.3    | Linguagem utilizada junto ao React                                |
| **TailwindCSS**      | 4.1.11   | Framework de estilização                                          |
| **Shadcn/UI**        | -------  | Biblioteca de Componentes baseada em tailwindcss                  |
| **React Router DOM** | 7.7.1    | Biblioteca para configurar e gerenciar o roteamento da aplicação  |
| **Framer Motion**    | 12.23.12 | Biblioteca para criar as animações da interface                   |
| **Swiper**           | 11.2.10  | Biblioteca para a criação de Slides                               |
| **Zod**              | 4.0.17   | Biblioteca para auxiliar as validações dos inputs dos formulários |
| **lucide-react**     | 0.537.0  | Biblioteca para a utilização de ícones                            |

---

## ⚙️ Funcionalidades

A aplicação conta com diferentes páginas e rotas que organizam a navegação do usuário e apresentam as informações principais.

### 🏠 Página Principal (`/`)

- **Descrição:** Página inicial da aplicação, com destaque para as especialidades da empresa (tecnologia, engenharia, arquitetura, etc.).
- **Elementos principais:**
  - Banner principal com logo da empresa e slogan.
  - Seção de especialidades.
  - Seção de destaque as qualidades da empresa
  - Slides que mostram os serviços oferecidos

---

### ℹ️ Sobre Nós (`/sobre`)

- **Descrição:** Página com informações sobre a empresa.
- **Elementos principais:**
  - Dados dos projetos realizados.
  - Missão, visão e valores.
  - Diferenciais da empresa
  - A forma que trabalhamos

---

### ℹ️ Projetos (`/projetos`)

- **Descrição:** Página com informações dos projetos realizados.
- **Elementos principais:**
  - Opção para filtrar cada tipo de projeto (Tecnologia, Arquitetura e Urbanismo, Soluções Elétricas, etc)
  - Slides com projetos de cada área

---

### Todas as páginas também contam com um modal para que clientes possam entrar em contato, provendo informações como nome, email, telefone e mensagem.
