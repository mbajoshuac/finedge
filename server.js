const express = require('express')
const app = express()
const env = require('./config/env')

app.use(express.json());



// Server port
app.listen(env.PORT, () => {
  console.log(`Server is running on port: ${env.PORT}`);
  console.log(env.BASE_PATH);
});
