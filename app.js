const express = require('express')
const app = express()
app.use(express.json())
var parser = require('ua-parser-js');
const port = process.env.PORT || 80

app.get('/', (req, res) => {
  var ua = parser(req.headers['user-agent']);
  // write the result as response
  res.end(JSON.stringify(ua, null, '  '));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// heroku login
// heroku create
// git init
// git add .
// git commit -m ""
//  heroku git:remote -a heroku git:clone -a guarded-coast-52199
// git push heroku master
