const brandShema = require('./schema');
const brandHandler = require('../../handlers/brand.handlers');

module.exports = function (fastify, opts, done) {
    fastify.get('/api/brands', { schema: brandShema.getAllBrandSchema }, brandHandler.getAll);

    fastify.get('/api/brand/:id', { schema: brandShema.getOneBrandSchema }, brandHandler.getOne);

    fastify.put('/api/brand/update/:id', { schema: brandShema.updateBrandSchema }, brandHandler.updateBrand);

    fastify.get('/api/brand/list-brand-fe', { schema: brandShema.getBrandFESchema }, brandHandler.getBrandFE);

    fastify.get('/api/brand/trash/:id',{ schema: brandShema.trashBrandSchema}, brandHandler.trashBrand);

    fastify.get('/api/brand/list-trash',{schema: brandShema.getAllTrashBrandSchema}, brandHandler.getListTrash);

    fastify.get('/api/brand/rescover-trash/:id',{schema: brandShema.rescoverTrashBrandSchema}, brandHandler.rescoverTrashBrand);

    fastify.delete('/api/brand/delete/:id',{schema: brandShema.deleteBrandSchema}, brandHandler.deleteBrand);

    fastify.get('/api/brand/display/:id',{schema: brandShema.displayBrandSchema}, brandHandler.displayBrand);
    
    fastify.post('/api/brand/create', { schema: brandShema.createBrandSchema }, brandHandler.createBrand);

    // fastify.put('/api/categories/update/:id', { schema: categoryShema.updateCategoriesSchema }, categoriesHandler.updateCategory);




    done();
};