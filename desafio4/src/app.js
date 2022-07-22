import express from 'express'

// routes
import usersRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import petsRouter from './routes/pets.router.js'

const app = express()
const PORT = 8080;


const server = app.listen (PORT, ()=> {
    console.log(`Listen on PORT ${PORT}`)
})

app.use(express.json())
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/pets',petsRouter);
app.use(express.static('public'));


