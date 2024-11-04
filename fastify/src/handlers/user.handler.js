const userService = require('../services/user.service');

function getAll(req, res) {

    const roles = req.params.roles;
    userService.getAll(this.mysql, roles)

        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error:', err);
            res.status(500).send({ error: 'Internal Server Error' }); 
        });
}


function getOne(req, res) {
    const id = req.params.id;
    userService.getOne(this.mysql, id)
        .then((result) => {
            // if (!result) {
            //     res.status(404).send({ error: 'Not Found' });
            // }
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
}


function createUser(req, res) {
    const data = req.body;
    userService.createUser(this.mysql, data)
        .then((result) => {
            const id = result.insertId;
            return userService.getOne(this.mysql, id);
        })
        .then(item => {
            res.send(item);
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}


function updateUser(req, res) {
    const data = req.body;
    const id = req.params.id;
    userService.updateUser(this.mysql, data, id)
        .then(async (result) => {
            if (result.affectedRows === 0) {
                res.status(404).send({ Error: 'Not Found' });
                return;
            }
            const item = await userService.getOne(this.mysql, id);
            res.send(item);
        })
        .catch((err) => {
            console.error('Database Error: ' + err.message);
            res.status(500).send({ Error: 'Internal Server Error' });
        });
}


function trashUser(req, res) {
    const id = req.params.id;
    userService.trashUser(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }
            return result;
        })
        .then(item => {
            res.send(item);
        })
        .catch((err) => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });

}


function rescoverTrashUser(req, res) {
    const id = req.params.id;
    userService.rescoverTrashUser(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }
            return userService.getOne(this.mysql, id);

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

function getListTrash(req, res) {
    const roles = req.params.roles
    userService.getListTrash(this.mysql, roles)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error:', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}


function displayUser(req, res) {
    const id = req.params.id;
    userService.displayUser(this.mysql, id)
        .then((result) => {
            if (!result) {
                res.status(404).send({ error: 'Not Found' });
            }
            return userService.getOne(this.mysql, id);

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


async function deleteUser(req, res) {
    const id = req.params.id;
    try{
        const item = await userService.getOne(this.mysql, id);
        console.log('Item:', item);
        if(!item){
            res.status(404).send({error: 'User not found'});
        }
        const result = await userService.deleteUser(this.mysql, id);
        if(result.error){
            res.status(404).send(result);
        }
        else{
            res.send(item);
        }
    }
    catch(err){
        console.error('Database Error: ' , err);
        res.status(500).send({error: 'Internal Server Error'});
    }
}


function checkLogin(req, res) {
    const data = req.body;
    console.log(data);
    userService.checkLogin(this.mysql, data)
        .then((result) => {
            res.send(result);
            console.log(result.message)
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}
function checkLoginadmin(req, res) {
    const data = req.body;
    console.log(data);
    userService.checkLoginadmin(this.mysql, data)
        .then((result) => {
            res.send(result);
            console.log(result.message)
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}

function updateUserAndAddress(req, res) {
    const data = req.body;
    const id = req.params.id;
    userService.updateUserAndAddress(this.mysql, data, id)
        .then(async (result) => {
            
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ' + err.message);
            res.status(500).send({ Error: 'Internal Server Error' });
        });
}


function updateUserPassword(req, res) {
    const data = req.body;
    const id = req.params.id;
    userService.updatePasswordCustomer(this.mysql, data, id)
        .then(async (result) => {
            res.send(result);
        })
        .catch((err) => {
            console.error('Database Error: ' + err.message);
            res.status(500).send({ Error: 'Internal Server Error' });
        });
}


// function updateCustomerAddress(req, res) {
//     const data = req.body;
//     const id = req.params.id;
//     userService.updateCustomerAddress(this.mysql, data, id)
//         .then(async (result) => {
            
//             res.send(result);
//         })
//         .catch((err) => {
//             console.error('Database Error: ' + err.message);
//             res.status(500).send({ Error: 'Internal Server Error' });
//         });
// }


function forgotPassword(req, res) {
    const data = req.body;
    console.log(data);
    userService.forgotPassword(this.mysql, data)
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            console.error('Database Error: ', err);
            res.status(500).send({ error: 'Internal Server Error !' });
        });
}


module.exports = {
    getAll,
    getOne,
    createUser,
    updateUser,
    trashUser,
    rescoverTrashUser,
    getListTrash,
    displayUser,
    deleteUser,
    checkLogin,
    checkLoginadmin,
    updateUserAndAddress,
    updateUserPassword,
    // updateCustomerAddress,
    forgotPassword,




    

};