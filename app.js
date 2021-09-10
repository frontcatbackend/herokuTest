const express = require('express')
const app = express()
app.use(express.json())
var parser = require('ua-parser-js');
const port = 3000

app.get('/', (req, res) => {
  var ua = parser(req.headers['user-agent']);
  // write the result as response
  res.end(JSON.stringify(ua, null, '  '));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})