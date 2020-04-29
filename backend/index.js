const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')

const port = 4000

app.use(cors())

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

http.listen(port,err => {
  if(err) {
    throw new Error ('Ooopsie, sommething bad happened')
  }
  console.log(`server is listening on ${port}`);
})