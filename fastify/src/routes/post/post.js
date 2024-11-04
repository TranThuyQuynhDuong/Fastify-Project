const postShema = require('./schema');
const postHandler = require('../../handlers/post.handler');

module.exports = function (fastify, opts, done) {
    

    fastify.get('/api/post/', { schema: postShema.getPostNewSchema }, postHandler.getPostNew);

    fastify.get('/api/post/get-by-type/:type', { schema: postShema.getAllPostByTypeSchema }, postHandler.getAllPostByType);

    fastify.get('/api/post/show/:id', { schema: postShema.getOnePostSchema }, postHandler.getOne);

    fastify.put('/api/post/trash/:id', { schema: postShema.trashPostSchema }, postHandler.trashPost);

    fastify.put('/api/post/rescover-trash/:id', { schema: postShema.rescoverTrashPostSchema}, postHandler.rescoverTrash);

    fastify.put('/api/post/display/:id', { schema: postShema.displayPostSchema}, postHandler.displayPost);

    fastify.get('/api/post/trash/get-list-trash',{schema: postShema.getListTrashPostByTypeSchema},postHandler.getListTrash);

    fastify.delete('/api/post/delete-post/:id', {schema: postShema.deletePostSchema}, postHandler.deletePost);

    fastify.post(`/api/post/create`,{schema: postShema.createPostSchema}, postHandler.createPost);

    fastify.get('/api/post/get-by-slug-topic/:slug',{schema: postShema.getPostBySlugTopicSchema}, postHandler.getPostBySlugTopic);

    fastify.get('/api/post/detail/:slug',{schema: postShema.getDetailPostAndOrtherSchema}, postHandler.getDeatilPostBySlugAndPostOther);
    
    fastify.put('/api/post/update/:id',{ schema: postShema.updatePostSchema}, postHandler.updatePost);





    done();
};