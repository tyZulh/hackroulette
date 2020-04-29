const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())

app.listen(port,err => {
  if(err) {
    throw new Error ('Ooopsie, sommething bad happened')
  }
  console.log(`server is listening on ${port}`);
})