import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import { up } from './database/migrations/00_create_points';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// Padrão: index, show, create, update, delete

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// routes.post('/points', upload.single('image'), pointsController.create);

routes.post(
    '/points',
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);

routes.get('/', (request, response) => {
    return response.json({ "message": "Hello World"});
});

const users = [
    'Jose Lito',
    'Mari Alva',
    'Ferdi Nando'
];

routes.get('/users', (request, response) => {
    const search = String(request.query.search);

    console.log('Listagem usuários');

    if (search) {
        console.log('Search: ' + search);
    }

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

routes.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    console.log('Obter usuário com id=' + id);

    const user = users[id];
 
    return response.json(user );
});

routes.post('/users', (request, response) => {
    const data = request.body;

    console.log('Criar usuário:');
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    }

    // users.push(user);

    return response.json(user);
});

export default routes;