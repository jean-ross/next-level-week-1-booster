<h1 align="center">Next Level Week #1 (Booster)</h1>
<p align="center">Projeto <strong>Ecoleta</strong> desenvolvido durante a Next Level Week (trilha Booster) da <a href="https://rocketseat.com.br">Rocketseat</a> 🚀👩🏽‍🚀</p>

<p align="center">
  <a href="#-instalacao-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Instalação e execução

_ps: Se precisar de ajuda para fazer um clone, esse [tutorial aqui](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository) vai te ajudar 💖_

1. Abra o terminal do seu computador. Se estiver no Windows pode ser o CMD ou Powershell;
2. Altere o diretório de trabalho atual para o local em que deseja ter o código do módulo salvo no seu computador;
3. Faça um clone desse repositório rodando: <br> `git clone https://github.com/jean-ross/next-level-week-1-booster.git`;
4. Entre na pasta do projeto rodando pelo terminal: `cd next-level-week-1-booster`;

### Server

1. Entre na pasta rodando pelo terminal: `cd server`;
2. Rode `npm install` para instalar as dependências do projeto;
3. Rode `npm run knex:migrate` para criar a base de dados;
4. Rode `npm run knex:seed` para criar os registros necessários na base dados;
5. Renomeie o arquivo <b>.env.example</b> para <b>.env</b>
6. Abra o arquivo <b>.env</b> e configure a variável `API_HOST` para o IP do seu computador, e opcionalmente a variável `API_PORT` para uma porta diferente da padrão (3333), e salve o arquivo;
7. Rode `npm run dev` para iniciar o servidor de desenvolvimento.

### Web

1. Entre na pasta rodando pelo terminal: `cd web`;
2. Rode `npm install` para instalar as dependências do projeto;
3. Rode `npm start` para iniciar a aplicação web.

### Mobile

1. Entre na pasta rodando pelo terminal: `cd mobile`;
2. Rode `npm install` para instalar as dependências do projeto;
3. Abra o arquivo <b>src/services/api.ts</b> e altere o valor do parâmetro `baseURL` para o mesmo valor configurado em `API_HOST`, no projeto Server, e salve o arquivo;
4. Rode `npm start` para iniciar a aplicação mobile.
5. Escaneie o QR Code da aplicação com a câmera do seu celular para testar a aplicação em seu dispositivo (para isso, seu dispositivo deve estar conectado à mesma rede em que a API está sendo executada).

## 🤔 Como contribuir

Se quiser contribuir para esse repositório aqui, seja corrigindo algum problema, adicionando comentários ou melhorando a documentação, você pode seguir esse tutorial abaixo:

- Faça [um fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) desse repositório;
- Entre no seu perfil no GitHub e faça um clone do repositório que você fez um fork;
- Cria uma branch com a sua alteração: `git checkout -b minha-alteracao`;
- Faça as alterações necessárias no código ou documentação;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-alteracao`;
- Agora é só abrir a sua Pull Request no repositório que você fez o fork;

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Jean Ross :wave:
