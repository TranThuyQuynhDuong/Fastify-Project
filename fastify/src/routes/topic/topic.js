const topicShema = require('./schema');
const topicHandler = require('../../handlers/topic.handlers');

module.exports = function (fastify, opts, done) {

    fastify.get('/api/topics', { schema: topicShema.getAllTopicSchema }, topicHandler.getAll);

    fastify.get('/api/topic/:id', { schema: topicShema.getOneTopicSchema}, topicHandler.getOne);

    fastify.post('/api/topic/create', { schema: topicShema.createTopicSchema }, topicHandler.createTopic);

    fastify.put('/api/topic/update/:id', {schema: topicShema.updateTopicSchema}, topicHandler.updateTopic);

    fastify.put('/api/topic/trash/:id', {schema: topicShema.trashTopicSchema}, topicHandler.trashTopic);

    fastify.put('/api/topic/rescover-trash/:id', {schema: topicShema.rescoverTrashTopicSchema}, topicHandler.rescoverTrashTopic);

    fastify.get('/api/topic/list-trash', {schema: topicShema.getAllTrashTopicSchema}, topicHandler.getListTrash);

    fastify.put('/api/topic/display/:id',{schema: topicShema.displayTopicSchema}, topicHandler.desplayTopic);

    fastify.delete('/api/topic/delete/:id',{schema: topicShema.deleteTopicSchema}, topicHandler.deleteTopic);

    fastify.get('/api/topic/getParent/:parent',{schema: topicShema.getParentTopicSchema}, topicHandler.getByParentId);

    done();
};