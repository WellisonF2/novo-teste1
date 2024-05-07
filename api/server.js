const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Adicione um middleware para redirecionar todas as solicitações para o JSON Server
server.use((req, res, next) => {
  // Certifique-se de redirecionar todas as solicitações, independentemente do método HTTP
  router(req, res, next);
});

// Implementação do servidor HTTP para funções serverless do Vercel
module.exports = (req, res) => {
  // Chame o servidor JSON diretamente
  server(req, res);
};
