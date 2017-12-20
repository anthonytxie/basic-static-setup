const app = require('./app');
const config = require('./../config/config');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})