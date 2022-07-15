import express from 'express'

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

