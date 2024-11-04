const productService = require('../services/product.service');


function getAll(req, res) {

    const { page = '1', limit = '10' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 10;

    productService.getAll(this.mysql, validPage, validLimit)
        .then((result) => {
            if (!result || !result.data) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id,
                    attributes: {
                        product_name: product.name,
                        product_cat: product.category_id,
                        product_brand: product.brand_id,
                        image: product.image,
                        detail: product.detail_1,
                        price: product.price,
                        status: product.status,
                        nameCat: product.nameCat,
                        nameBrand: product.nameBrand,
                        qty: product.qty,
                        slug: product.slug,
                    }
                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
        })
        .catch((err) => {
            console.error('Database error: ' + err);
            res.status(500).send({ error: 'Internal Server Error !' });
        })
}


function getOne(req, res) {
    const id = req.params.id;
    productService.getOne(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
}


function getProductByCategory(req, res) {
    const category_id = req.params.category_id;
    productService.getProductByCategory(this.mysql, category_id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });

        })
}





function getProductByBrandPagination(req, res) {
    const slug = req.params.slug;
    const { page = '1', limit = '10' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 10;

    productService.getProductBrandPagination(this.mysql, slug, validPage, validLimit)
        .then((result) => {
            if (!result || !result.data) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id, // Đảm bảo trường id được hiển thị
                    attributes: {
                        id: product.id,
                        name: product.name,
                        product_cat: product.category_id,
                        product_brand: product.brand_id,
                        image: product.image,
                        detail: product.detail_1,
                        price: product.price,
                        slug: product.slug,
                        price_sale: product.price_sale,
                        status: product.status,
                    }
                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
        })
        .catch((err) => {
            console.error('Database error: ' + err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}



function getDeatilProductBySlugAndProductOther(req, res) {

    const slug = req.params.slug;

    productService.getDetailProductBySlugAndProductOther(this.mysql, slug)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });

        })
}





function displayProduct(req, res) {
    const id = req.params.id;
    productService.displayProduct(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }
            return productService.getOne(this.mysql, id);

            // res.send(result);
        })
        .then(item => {
            res.send(item);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });

}


function getSearchProductPagination(req, res) {

    const key = req.params.key;

    const { page = '1', limit = '10' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 10;

    productService.getSearchProductPagination(this.mysql, key, validPage, validLimit)
        .then((result) => {
            if (!result || !result.data) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id_pro,
                    name: product.name,
                    product_cat: product.category_id,
                    product_brand: product.brand_id,
                    image: product.image,
                    price_sale: product.price_sale,
                    price: product.price,
                    status: product.status,
                    slug: product.slug,
                    // nameCat: product.nameCat,
                    // nameBrand: product.nameBrand

                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
        })
        .catch((err) => {
            console.error('Database error: ' + err);
            res.status(500).send({ error: 'Internal Server Error !' });
        })
}


function trashProduct(req, res) {
    const id = req.params.id;
    productService.trashProduct(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }

            res.send(result);
        })
        .then(item => {
            res.send(item);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });

}


function rescoverTrashProduct(req, res) {
    const id = req.params.id;
    productService.rescoverTrashProduct(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }

            res.send(result);
        })
        .then(item => {
            res.send(item);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });

}


function getListTrash(req, res) {

    const { page = '1', limit = '10' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 10;

    productService.getListTrash(this.mysql, validPage, validLimit)
        .then((result) => {
            if (!result || !result.data) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id,
                    product_name: product.name,
                    product_cat: product.category_id,
                    product_brand: product.brand_id,
                    image: product.image,
                    price: product.price,
                    status: product.status,
                    nameCat: product.nameCat,
                    nameBrand: product.nameBrand

                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
        })
        .catch((err) => {
            console.error('Database error: ' + err);
            res.status(500).send({ error: 'Internal Server Error !' });
        })
}


async function deleteProduct(req, res) {
    const id = req.params.id;
    try {
        const result = await productService.deleteProduct(this.mysql, id);
        if (result.error) {
            res.status(404).send(result);
        }
        else {
            res.send(result);
        }
    }
    catch (err) {
        console.error('Database Error: ', err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}


function getAllProNotSale(req, res) {

    const { page = '1', limit = '10' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 10;

    productService.getAllProNotSale(this.mysql, validPage, validLimit)
        .then((result) => {
            if (!result || !result.data) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id,
                    product_name: product.name,
                    product_cat: product.category_id,
                    product_brand: product.brand_id,
                    image: product.image,
                    detail: product.detail_1,
                    price: product.price,
                    status: product.status,
                    nameCat: product.nameCat,
                    nameBrand: product.nameBrand,
                    qty: product.qty,
                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
        })
        .catch((err) => {
            console.error('Database error: ' + err);
            res.status(500).send({ error: 'Internal Server Error !' });
        })
}
// function createProduct(req, res) {
//     if (!req.body) {
//         console.error('No data provided');
//         res.status(400).send({ error: 'No data provided' });
//         return;
//     }
//     const data = req.body; 
//     console.log(data);
//     console.log(data.product);
//     console.log(data.description);
//     console.log(data.image);
//     const product = data.product;
//     const description = data.description;
//     const tamp = Object.values(description).every(value => value === '' || value === null || value === undefined);
//     productService.createProduct(this.mysql, product)
//         .then((result) => {
//             console.log(result);
//             if (!tamp) {
//                 description.id = result;
//                 productService.insertDescription(this.mysql, description);
//             }

//             console.log(store);

//             return productService.getOne(this.mysql, result);
//         })
//         .then(item => {
//             res.send(item);
//         })
//         .catch(err => {
//             console.error('Database Error: ', err);
//             res.status(500).send({ error: 'Internal Server Error !' });
//         });
// }
function createProduct(req, res) {
    if (!req.body) {
        console.error('No data provided');
        res.status(400).send({ error: 'No data provided' });
        return;
    }
    const data = req.body; 
    console.log(data);
    console.log(data.product);
    console.log(data.description);

    const product = data.product;
    const description = data.description;
    const isEmptyDescription = Object.values(description).every(value => value === '' || value === null || value === undefined);

    productService.createProduct(this.mysql, product)
        .then((result) => {
            console.log(result);
            if (result.error) {
                res.status(500).send({ error: result.error });
                return;
            }
            if (!isEmptyDescription) {
                description.id = result;
                return productService.insertDescription(this.mysql, description);
            }
            return Promise.resolve();
        })
        .then(() => {
            return productService.getOne(this.mysql, product.id);
        })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
}

function updateProduct(req, res) {
    if (!req.body) {
        console.error('No data provided');
        res.status(400).send({ error: 'No data provided' });
        return;
    }
    const id = req.params.id;
    const data = req.body;
    console.log(data);
    console.log(data.product);
    console.log(data.description);
    console.log(data.image);
    const product = data.product;
    const description = data.description;


    productService.updateProduct(this.mysql, product, id)
        .then((result) => {
            productService.updateDescription(this.mysql, description, id);
            return productService.getOne(this.mysql, result.insertId);
        })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}


function getBestSeller(req, res) {
    const { page = '1', limit = '9' } = req.query;
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    const validPage = pageNum > 0 ? pageNum : 1;
    const validLimit = limitNum > 0 ? limitNum : 9;

    productService.getBestSeller(this.mysql, validPage, validLimit)
        .then((result) => {
            console.log(result)
            if (!result || !result.data || result.data.length === 0) {
                res.status(404).send({ error: 'No product found' });
                return;
            }
            const formattedResult = {
                data: result.data.map(product => ({
                    id: product.id,
                    attributes: {
                        product_name: product.name,
                        category_id: product.category_id,
                        brand_id: product.brand_id,
                        image: product.image,
                        price: product.price,
                        slug: product.slug,
                        nameCat: product.nameCat,
                        nameBrand: product.nameBrand,
                        created_at: product.created_at
                    }
                })),
                meta: {
                    pagination: result.meta.pagination
                }
            };
            res.send(formattedResult);
            console.log(result);
        })
        .catch((err) => {
            console.error('Database error: ' + err.message);
            res.status(500).send({ error: 'Internal Server Error!' });
        });
}




module.exports = {
    getAll,
    getOne,
    getProductByCategory,
    getDeatilProductBySlugAndProductOther, 
    getProductByBrandPagination,
    displayProduct,
    getSearchProductPagination,
    trashProduct,
    rescoverTrashProduct,
    getListTrash,
    deleteProduct,
    getAllProNotSale,
    updateProduct,
    createProduct,
    getBestSeller,


}