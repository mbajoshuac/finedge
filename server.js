const app = require('express')()
const port = 8000 || 3000


//Server port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${port}`);
})