const productShema = require('./schema');
const productHandler = require('../../handlers/product.handler');

module.exports = function (fastify, opts, done) {
    // const onRequest = [
    //     async (request, reply) => await fastify.authenticate(request, reply),
    // ];


    fastify.get('/api/products', { schema: productShema.getAllProductSchema }, productHandler.getAll); 
    
    fastify.get('/api/product/bestseller', { schema: productShema.ProductBestSellerSchema }, productHandler.getBestSeller);

    fastify.get('/api/product/show/:id', { schema: productShema.getOneProductSchema}, productHandler.getOne);

    fastify.get('/api/product/product-by-category/:category_id',{schema: productShema.getProductByCategorySchema}, productHandler.getProductByCategory)

    fastify.get('/api/product/product-brand/:slug', {schema: productShema.getProductByBrandPaginationSchema}, productHandler.getProductByBrandPagination);

    fastify.get('/api/product/detail/:slug',{schema: productShema.getProductByCategoryAndOrtherSchema}, productHandler.getDeatilProductBySlugAndProductOther);

    fastify.put('/api/product/display/:id',{schema: productShema.displayProductSchema}, productHandler.displayProduct);
    
    fastify.get('/api/product/search/:key',{schema: productShema.getSearchProductPaginationSchema}, productHandler.getSearchProductPagination);

    fastify.put('/api/product/trash/:id',{schema: productShema.trashProductSchema}, productHandler.trashProduct);

    fastify.put('/api/product/rescover-trash/:id',{schema: productShema.rescoverTrashProductSchema}, productHandler.rescoverTrashProduct);
 
    fastify.get('/api/product/list-trash',{schema: productShema.getListTrashSchema}, productHandler.getListTrash);

    fastify.delete('/api/product/delete/:id',{schema: productShema.deleteProductSchema}, productHandler.deleteProduct);

    fastify.get('/api/product/product-not-sale',{schema: productShema.getAllProductNotSaleSchema}, productHandler.getAllProNotSale);

    fastify.post('/api/product/create',{schema: productShema.createProductSchema}, productHandler.createProduct);

    fastify.put('/api/product/update/:id',{schema: productShema.updateProductSchema}, productHandler.updateProduct);


    done();
};