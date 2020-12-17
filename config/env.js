require ('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  BASE_PATH: `${process.env.MAIN_URL}/api/v1`
}