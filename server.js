const env = require('./config/env')
const app = require('./app')
const mongoose = require('mongoose')

//mongodb option files
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose
  .connect("mongodb://localhost:27017/castusdatabase", { ...options })
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.error("could not connect to MongoDB..."))
console.log("server is running")
  


// Server port
app.listen(env.PORT, () => {
  console.log(`Server is running on port: ${env.PORT}`);
});

