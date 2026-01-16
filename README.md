# Site da Semana de Recepção de 2026

Esse repositório contém o código fonte do site estático usado na comissão da semana de recepção de 2026 hospedado em https://recepcao.ime.usp.br/.

## Guia de Contribuição

Este guia descreve o fluxo de trabalho para contribuir com o projeto. O processo é simples e foi pensado para facilitar a organização e o acompanhamento das tarefas.

---

## Passos para Contribuir

### 1. Antes de começar

Certifique-se de que você tem acesso ao repositório. Caso não tenha, envie uma mensagem para um responsável do projeto para configurar seu acesso e determinar suas atividades.

### 2. Clonando o repositório

Antes de começar a trabalhar, é necessário clonar o projeto do repositório remoto para sua máquina local. Você pode fazer isso de duas formas: usando o terminal ou uma ferramenta gráfica.

#### Usando o terminal:

1. Faça login no GitHub com o comando `gh auth` (se ainda não tiver feito):
   ```bash
   gh auth login
   ```
2. Copie o link HTTPS ou SSH do repositório no GitHub.
3. Clone o repositório. No terminal, use o comando:
   ```bash
   git clone https://github.com/recepcaoimeusp/site-semana-de-recepcao-2026
   ```
   ou
   ```bash
   gh repo clone recepcaoimeusp/site-semana-de-recepcao-2026
   ```

#### Usando o GitHub Desktop (para quem prefere evitar o terminal):

1. Baixe e instale o [GitHub Desktop](https://desktop.github.com/).
2. Faça login na sua conta GitHub.
3. No repositório, clique em **Code** e escolha a opção **Open with GitHub Desktop**.
4. Siga as instruções para clonar o projeto.

---

### 3. Criando uma branch para a sua tarefa

Antes de começar o desenvolvimento, crie uma nova branch com base na branch `main`. 
Como a maioria das branches serão baseados em issues, usaremos como padrão para o nome da branch `issue-[id]/[breve-descricao]`.

**Exemplo:**
Se deseja fazer o issue 12 - fazer o cronograma do semana de recepção, um nome possível é `issue-12/fazer-cronograma`.

#### Comandos Git:

1. Certifique-se de estar na branch `main`:

   ```bash
   git checkout main
   ```

2. Atualize a branch `main` local com a versão mais recente do repositório remoto:

   ```bash
   git pull origin main
   ```

3. Crie e mude para a nova branch:
   ```bash
   git checkout -b issue-[id]/[breve-descricao]
   ```

   **Exemplo:**
    No exemplo mostrado acima, use
   ```bash
   git checkout -b issue-12/fazer-cronograma
   ```

### 4. Desenvolvendo a tarefa

Trabalhe na branch que você criou, implementando as alterações necessárias. Faça commits com mensagens claras e explicativas sobre o que foi feito.

#### Comandos Git:

1. Adicione os arquivos alterados ao commit:

   ```bash
   git add .
   ```

2. Faça o commit com uma mensagem clara:

   ```bash
   git commit -m "[Breve descrição do que foi feito]"
   ```

   **Exemplos:**

   ```bash
   git commit -m "Desenvolvido o cronograma sem os estilos"
   git commit -m "Adiciona os estilos para o cronograma"
   ```

3. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin issue-[id]/[breve-descricao]
   ```
   **Exemplo:**
   ```bash
   git push origin issue-12/fazer-cronograma
   ```

### 5. Criando uma Pull Request

Quando terminar o desenvolvimento da sua tarefa:

1. Acesse o repositório no GitHub ou GitLab.
2. Localize a sua branch no menu de branches.
3. Clique em **New Pull Request** (ou equivalente).
4. Certifique-se de que a base da Pull Request é a branch `main`.
5. Inclua uma descrição clara do que foi implementado.
6. Envie a Pull Request para análise.

<!--### 6. Atualizar o issue -->

---

## Resumo do Fluxo

1. **Clone o projeto:** `git clone https://github.com/recepcaoimeusp/site-semana-de-recepcao-2026` ou use o GitHub Desktop.
2. **Crie uma branch da sua tarefa:** `git checkout -b issue-[id]/[breve-descricao]`.
3. **Implemente e commite suas mudanças:** `git add .` e `git commit -m "[Breve descrição]"`.
4. **Envie para o repositório remoto:** `git push origin issue-[id]/[breve-descricao]`.
5. **Crie a Pull Request.**


---

Em caso de dúvidas, entre em contato com o responsável pelo projeto. Estamos aqui para ajudar!
