var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
  console.log('Server listening http://localhost:3000');
})

io.on('connection', (socket) => {

  socket.on('newMessage', (data) =>{
    console.log(data)
    setTimeout(()=>{
      socket.emit('asyncAddNewMessage',{
        msg: data
      })
    },2000)
  })

});