const configShema = require('./schema');
const configHandler = require('../../handlers/config.handler');

module.exports = function (fastify, opts, done) {
    fastify.get('/api/config', { schema: configShema.getConfigSchema  }, configHandler.getConfig );

    fastify.get('/api/config/show/:id', { schema: configShema.getOneConfigSchema}, configHandler.getOne);

    fastify.put('/api/config/update/:id',{ schema: configShema.updateConfigSchema}, configHandler.updateConfig);



    done();
};