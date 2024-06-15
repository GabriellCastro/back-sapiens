# Teste Fastypay Brasil

Aplicação web completa que permita aos usuários criar e
gerenciar suas despesas pessoais. A aplicação deverá ser desenvolvida utilizando as
tecnologias especificadas abaixo. A aplicação deve incluir autenticação de usuários,
gerenciamento de tarefas, e uma interface de usuário responsiva e intuitiva.

## :rocket: Technologies

The following technologies were used in the project:

- [NestJs](https://docs.nestjs.com/)
- [JWT](https://jwt.io)
- [Postgres](https://www.postgresql.org/)
- [PrismaORM](https://www.prisma.io/)
- [Swagger](https://swagger.io)

## :white_check_mark: Requirements

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Docker](https://docs.docker.com/compose/)

## :checkered_flag: Starting

```bash
# Execute o comando git clone para clonar o repositório
$ git clone git@github.com:GabriellCastro/back-sapiens.git

# Entre na pasta do repositório clonado
$ cd back-sapiens

#Execute o fio para instalar as dependências
$ yarn

# Na raiz do projeto (back-sapiens)
# Altere o nome de .env.example para .env

# Execute o docker na raiz do projeto (back-sapiens)
$ sudo docker comporse up -d

# Execute prism Migrate na raiz do projeto (back-sapiens)
$ npx prisma migrate dev

# Para iniciar o aplicativo
$ yarn dev

#Acessar API do documento
$ http://localhost:3001/docs

```

## Autor

Made by Gabriel Castro 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eugabrielcastro/)](https://www.linkedin.com/in/eugabrielcastro/)
[![Gmail Badge](https://img.shields.io/badge/-contatodevgabriel@gmail.com-red?style=flat-square&link=mailto:contatodevgabriel@gmail.com)](mailto:contatodevgabriel@gmail.com)

## License

Nest is [MIT licensed](LICENSE).
