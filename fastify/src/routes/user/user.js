const userShema = require('./schema');
const userHandler = require('../../handlers/user.handler');

module.exports = function (fastify, opts, done) {

    fastify.get('/api/user/:roles', { schema: userShema.getAllUserSchema }, userHandler.getAll);

    fastify.get('/api/user/show/:id', { schema: userShema.getOneUserSchema }, userHandler.getOne);

    fastify.post('/api/user/create', { schema: userShema.createUserSchema }, userHandler.createUser);

    fastify.put('/api/user/update/:id', { schema: userShema.updateUserSchema }, userHandler.updateUser);

    fastify.put('/api/user/trash/:id', { schema: userShema.trashUserSchema }, userHandler.trashUser);

    fastify.put('/api/user/rescover-trash/:id', { schema: userShema.rescoverTrashUserSchema }, userHandler.rescoverTrashUser);

    fastify.get('/api/user/list-trash/:roles', { schema: userShema.getAllTrashUserSchema }, userHandler.getListTrash);

    fastify.put('/api/user/display/:id', { schema: userShema.displayUserSchema }, userHandler.displayUser);

    fastify.delete('/api/user/delete/:id', { schema: userShema.deleteUserSchema }, userHandler.deleteUser);

    fastify.post('/api/user/check-login',{schema: userShema.checkLoginSchema}, userHandler.checkLogin);
    fastify.post('/api/user/check-login-admin',{schema: userShema.checkLoginadminSchema}, userHandler.checkLoginadmin);

    fastify.put('/api/user/update-user-address/:id',{schema: userShema.updateUserAndAddressSchema}, userHandler.updateUserAndAddress);

    fastify.put('/api/user/customer/updata-password/:id', {schema: userShema.updatePasswordCustomerSchema}, userHandler.updateUserPassword);

    // fastify.put('/api/user/customer/update-address/:id',{ schema: userShema.updateCustomerAddressSchema}, userHandler.updateCustomerAddress);


    fastify.post('/api/user/forgot-password',{ schema: userShema.forgotPasswordSchema}, userHandler.forgotPassword);


    done();
};