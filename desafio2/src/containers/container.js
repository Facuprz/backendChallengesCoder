const fs = require ('fs');

const path = './files/products.json'

class Container { //container class, manage products
    getAll = async () => {
        try {
            if (fs.existsSync(path)) {
                let fileData = await fs.promises.readFile (path,'utf-8');
                let products = JSON.parse(fileData);
                return products;
            } else {
                return []; // no products found
            }
        } catch (err) {
            console.log ('getAll error: '+err);
        }
    }


    save = async (product) => {
        try {
            let products = await this.getAll();
            if (products.length === 0) { //no products
                product.id = 1;
                products.push(product);
                await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
            } else { // no more products
                product.id = products[products.length - 1].id + 1;
                products.push(product);
                await fs.promises.writeFile(path, JSON.stringify(products, null,'\t'))
                console.log(`Product ${product.name} id: ${product.id}`)
            }
        } catch (err) {
            console.log('save error: '+err);
        }
    }

    getById = async (id) => {
        try {
            let objectId = await this.getAll();
            if (objectId.length + 1 > id) {
                console.log(objectId.find(e => e.id === id));
            } else {
                return null;
            }
        } catch (err) {
            console.log('getById error: '+err);
        }
    }

    deleteById = async (id) => {
        try {
            const data = await this.getAll();
            if (data.length + 1 > id) {
                const del = data.filter((item) => item.id != id )
                await fs.promises.writeFile(path, JSON.stringify(del, null,'\t'))
            } else {
                console.log('id does not exist');
            }
        } catch (err) {
            console.log('deleteById error: '+err);
        }
    }

    deleteAll = async () => {
        try {
            await fs.promises.unlink(path);
            console.log('deleted');
        } catch (err) {
            console.log('deleteAll error: '+err);
        }
    }
}

module.exports = Container;