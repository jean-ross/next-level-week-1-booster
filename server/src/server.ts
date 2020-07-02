import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

// Em ambiente de produção, poderia configurar somente o domínio da aplicação front-end que irá consumir
app.use(cors());
// Configura o express para reconhecer o formato JSON nas requisições
app.use(express.json());
app.use(routes);

// Static disponibiliza arquivos estáticos que precisam ser acessados de forma pública na aplicação
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);