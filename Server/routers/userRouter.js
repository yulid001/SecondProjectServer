const userBL = require('../models/userBL');

const express = require('express');
let router = express.Router();

router.get('/', async function(req, resp)
{
    let users = await userBL.getAllUsers();
    return resp.json(users);
})


router.get('/:id', async function(req,resp)
{
    let id = req.params.id;
    let user = await userBL.getUser(id);
    return resp.json(user);
})


router.post('/', async function(req,resp)
{
    let obj = req.body
    let userid = await userBL.addUser(obj);
    return resp.json("Created with ID " + userid);
})


router.put('/:id', async function(req,resp)
{
    let obj = req.body;
    let id = req.params.id;
    await userBL.updateUser(id,obj);
    return resp.json("Updated");
})


router.delete('/:id', async function(req,resp)
{  
    let id = req.params.id;
    await userBL.deleteUser(id);
    return resp.json("Deleted");
})

module.exports = router;

