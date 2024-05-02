<h1 align="center"> EXPLOREfit </h1>

### Tópicos

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Instalação e execução](#instalação-e-execução-do-projeto)

- [Melhorias possíveis](#melhorias-possíveis)

- [Desenvolvimento](#desenvolvimento)


## Descrição do projeto

EXPLOREfit é um site desenvolvido para reunir informações sobre locais de exercício. O objetivo é que os usuários possam cadastrar e acessar opções de atividades variadas ao ar-livre, diversificando assim a sua prática de exercício físico. Por exemplo, o usuário pode cadastrar uma praia específica, classificando-a como um espaço bom para surfe. Para isso, é necessário fornecer algumas informações (como nome do local, uma pequena descrição e cep), que, depois, ficam disponíveis aos outros usuários.

Em resumo, o EXPLOREfit pretende incentivar e facilitar o contato com a natureza e a vida saudável, reunindo dicas interessantes.

O site conta com rotas privadas, utilizando a página de login e cadastro de usuário como iniciais. A partir da validação das informações, que são armanezadas no localStorage, é oferecido acesso às página: inicial/dashboard, cadastro de locais e listagem das opções.


## Funcionalidades

:heavy_check_mark:`Funcionalidade 1:` Cadastro do usuário.

:heavy_check_mark:`Funcionalidade 2:` Login do usuário.

:heavy_check_mark:`Funcionalidade 3:` Visualização dos locais em formato de Card, com opção de deletar.

:heavy_check_mark:`Funcionalidade 4:` Cadastro e edição dos locais.


## Ferramentas utilizadas

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://as2.ftcdn.net/v2/jpg/02/49/94/27/1000_F_249942709_30yeu8oRHYK3flNN2OMW22NqbDQx4Kcx.jpg/>

<p align="left">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img height="50"  src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>

* React-router-dom;
* React-hook-form;
* Json-server;
* Api ViaCEP;
* Biblioteca Material UI;


## Instalação e execução do projeto

```
git clone https://github.com/sarahfrainer/Exercita365.git
cd Exercita365
npm install
npm run dev

```

```
npm install react-router-dom

```

```
npm install react-hook-form
```

```
npm install -g react-devtools
```

```
npm install @mui/material @emotion/react @emotion/styled
```

```
npm install -g json-server
```

```
json-server --watch ./data/db.json
```

## Melhorias possíveis

Melhorias que poderiam ter sido aplicadas ao projeto:

1. Melhor desenvolvimento do CSS e da parte estética (que não era o foco desse projeto em questão);
2. Desenvolvimento de uma página pessoal do usuário, onde ele poderia alterar as informações de sua conta ou até mesmo apagá-la;
3. Utilização de um mapa para demonstração dinâmica dos locais;
4. Restrição de usuários que podem editar a trilha, para que essa função se tornasse disponível apenas para o criador.


## Desenvolvimento

Projeto desenvolvido por Sarah Beatriz Frainer, como trabalho final do módulo Front-End do curso "FuturoDev", do Sesi-SENAI.
