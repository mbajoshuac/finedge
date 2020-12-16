const app = require('express')()
const port = 8000 || 3000


//Server port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})