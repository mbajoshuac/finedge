const env = require('./config/env')
const app = require('./app')


// Server port
app.listen(env.PORT, () => {
  console.log(`Server is running on port: ${env.PORT}`);
});

 