const express = require ('express');
const app = express();
const mainRouter = require ('./routes/router')
const heroesRouter = require('./routes/rutaHeroes')

app.listen(3000, ()=> {
    console.log('Server on port 3000')
})
app.use(mainRouter)
app.use(heroesRouter)