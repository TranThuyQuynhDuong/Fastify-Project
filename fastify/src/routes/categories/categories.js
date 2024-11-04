const categoryShema = require('./schema');
const categoriesHandler = require('../../handlers/categories.handler');

module.exports = function (fastify, opts, done) {
    fastify.get('/api/categories', { schema: categoryShema.getAllCategoriesSchema }, categoriesHandler.getAll);

    fastify.get('/api/categories/:id', { schema: categoryShema.getOneCategoriesSchema }, categoriesHandler.getOne);

    fastify.get('/api/categories/getByParent/:parent', { schema: categoryShema.getParentCategoriesSchema }, categoriesHandler.getByParent);

    fastify.post('/api/categories/create', { schema: categoryShema.createCategoriesSchema }, categoriesHandler.createCategory);

    fastify.put('/api/categories/update/:id', { schema: categoryShema.updateCategoriesSchema }, categoriesHandler.updateCategory);

    fastify.get('/api/categories/trash/:id',{schema: categoryShema.trashCategoriesSchema}, categoriesHandler.trashCategory);

    fastify.get('/api/categories/rescover-trash/:id',{schema: categoryShema.rescoverTrashCategorySchema}, categoriesHandler.rescoverTrashCategory);

    fastify.get('/api/categories/list-trash',{schema: categoryShema.getAllTrashCategorySchema}, categoriesHandler.getListTrash);

    fastify.get('/api/categories/display/:id', {schema: categoryShema.desplayCategoriesSchema}, categoriesHandler.desplayCategory);

    fastify.delete('/api/categories/delete/:id', {schema: categoryShema.deleteCategoriesSchema}, categoriesHandler.deleteCategory);




    done();
};