
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Task App</h3>

  <p align="center">
    Projecto Criado utilizandos as tecnologias mais recentes do mercado,
    NodeJS, ReactJS
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)



<!-- ABOUT THE PROJECT -->
## About The Project

Task App é um gerenciador de tarefas, permite criar, editar, marcar como finalizado,
e remover tarefas

### Built With

* [NodeJs](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [Typescript](https://reactjs.org/)
* [Typeorm](https://reactnative.dev/)
* [postgresql](https://www.mongodb.com/)
* [express](https://mongoosejs.com/)


<!-- GETTING STARTED -->
## Getting Started

para rodar o projecto você precisa de ter o npm ou yarn instalado na sua maquina e
o Postgresql

### Prerequisites
para obter o npm https://www.npmjs.com/get-npm

### Installation

1. Clone the repo
```sh
git clone https://github.com/AdilsonFuxe/devradar.git
```
2. Configuração do servidor
 
Entre dentro da pasta server
```sh
    cd server
```
dentro da pasta server rode o seguinte comanddo para instalar todas as dependencias

```sh
npm install
```
ou
```sh
yarn install
```
para rodar o servidor execute o camando
```sh
npm run dev
```
ou
```sh
yarn dev
```

o servidor vai rodar em `http://localhost:3333`

3. Configuracao do front-end web

Entre dentro da pasta web
```sh
    cd web
```
dentro da pasta web rode o seguinte comanddo para instalar todas as dependencias

```sh
npm install
```
ou
```sh
yarn install
```
entre dentro da pasta `web/src/service/api.js` adicione seu ip local em

```JS
const api = axios.create({
    baseURL: 'http://seuip:3333'
});

```
para rodar o projecto execute
```sh
npm start
```
ou
```sh
yarn start
```

<!-- USAGE EXAMPLES -->
## Usage

[![Product Name Screen Shot][tarefas]](https://example.com)
[![Product Name Screen Shot][detalhes]](https://example.com)
[![Product Name Screen Shot][descricao]](https://example.com)


<!-- CONTACT
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

 -->
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[tarefas]: docs/tarefas.png
[descricao]: docs/descricao.png
[detalhes]: docs/detalhes.png

