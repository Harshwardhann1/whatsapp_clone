import { Router } from 'express';
import { addUser, getUsers } from '../controllers/user.controller.js';
import {
  getConversation,
  newConversation,
} from '../controllers/conversation.controller.js';
import { getMessages, newMessage } from '../controllers/message.controller.js';
import { getImage, uploadFile } from '../controllers/image.controller.js';
import upload from '../utils/upload.js';

const route = new Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);
route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);
route.post('/file/upload', upload.single('file'), uploadFile);
route.get('/file/:filename', getImage

)

export default route;
