const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const newMessage = (type, name, text, data, ) => {
  return {
    text,
    data: '',
    user: {
      type,
      name,
    }
  }
}
server.listen(3000, () => {
  console.log('Server listening http://localhost:3000');
})

io.on('connection', (sockets) => {
  sockets.on('goToRoom', (data, cd) => {
    if (!data.name || !data.room) {
      return cd("Ошбика goToRoom ");
    }

    sockets.join(data.room);
    cd({
      userId: sockets.id
    });
    sockets.emit('asyncNewMessage', newMessage('admin', '', `Добро пожалывать в комнату ${data.room}`));
    sockets.broadcast.to(data.room).emit('asyncNewMessage', newMessage('admin', '', `Присоеденился ${data.name}`));
  });


  sockets.on('getRooms', () => {
    sockets.emit('asyncSetRooms', Object.keys(sockets.adapter.rooms));
  });

  sockets.on('newMessage', (data, cd) => {
  
    if (!data.text) {
      return cd("Ошбика newMessage ");
    }
    cd(data);
    sockets.broadcast.to(data.user.room).emit('asyncNewMessage', data);
  });

})