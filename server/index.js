const express = require('express')
const apiroutes = require('./views/task.routes')

const port = 5000
const app = express()

app.get("/", (req, res) => {
  res.json({ msg: "test of backend" });
});

app.use(express.json())
app.use('/api', apiroutes)

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`)
})