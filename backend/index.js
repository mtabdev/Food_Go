
require('dotenv').config();
const path=require('path')
const express = require('express')
const mongoDb=require('./database')
const app = express()
const port = process.env.PORT
mongoDb()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//youtube
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
//youtube ends







app.use((req,res,next )=>{
res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
res.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-Width,Content-Type,Accept"
)
next()
})



app.use(express.json())
app.use('/api',require('./Routes/Createuser'))
app.use('/api',require('./Routes/Displaydata'))


app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})