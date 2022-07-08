const Container = require("./containers/container")

const productService = new Container();

const environment = async() => {
    console.log('Getting products');
    let products = await productService.getAll();
    console.log(products);

    console.log('Adding a product');
    let product = {
        name: "Producto numero 4",
		price: "100000"
    }
    await productService.save(product)
}

const showProducts = async() => {
    let productList = await productService.getAll();
    console.log(productList);
}

environment();

showProducts();

