
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! hoy 5 octubre 24')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} hoy 14 abril 2025`)
})

