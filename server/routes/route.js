import { Router } from 'express';
import { addUser, getUsers } from '../controllers/user.controller.js';
import { newConversation } from '../controllers/conversation.controller.js';

const route = new Router();

route.post('/add', addUser)
route.get('/users', getUsers)
route.post('/conversation/add', newConversation)

export default route;