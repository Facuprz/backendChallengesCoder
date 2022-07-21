import express from 'express'
import Container from './containers/container.js'

const app = express();
const PORT = 8080;

const productService = new Container();
const getProducts = productService.getAll();

const server = app.listen (PORT, ()=> {
    console.log(`Listen on PORT ${PORT}`)
})

app.get('/' , (req, res)=>{
    res.send("Welcome to Express")
})

app.get('/products', async (req, res)=>{
    let result = await getProducts
    res.send(result)
})

app.get('/productRandom', async (req, res) => {
    let randomProduct = await productService.getRandom()
    res.send(randomProduct)
})