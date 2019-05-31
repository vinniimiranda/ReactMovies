const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(path.join(__dirname, '/build/')))
const port = process.env.PORT || 8080
app.get(/.*/, (req, res) =>
  res.sendfile(__dirname + '/build/index.html')
)

app.listen(port)
console.log('Servidor rodando na porta ' + port)