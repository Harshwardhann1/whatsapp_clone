import { Server } from 'socket.io';

const io = new Server(9000, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

let users = [];
const addUser = (userData, socketId) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on('connection', (socket) => {
  console.log('userConnected');
  socket.on('addUsers', (userData) => {
    addUser(userData, socket.id);
    io.emit(('getUsers', users));
  });

  socket.on('sendMessage', (data) => {
    console.log("Data received in sendMessage:", data);
    console.log("Users array:", users);
  
    const user = getUser(data.receiverId);
  
    if (!user) {
      console.warn(`User with receiverId ${data.receiverId} not found.`);
      return;
    }
  
    io.to(user.socketId).emit('getMessage', data);
  });
});
