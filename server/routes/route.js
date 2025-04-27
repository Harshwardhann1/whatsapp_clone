import { Router } from 'express';
import { addUser, getUsers } from '../controllers/user.controller.js';

const route = new Router();

route.post('/add', addUser)
route.get('/users', getUsers)

export default route;