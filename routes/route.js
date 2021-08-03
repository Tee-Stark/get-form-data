const Users = require("../models/user.js");
//const bcrypt = require("bcryptjs");
const router = require("express").Router();

router.post('/user/signin', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try{
        const record = await Users.create({ email,password });
        if(!record) {
            return res.status(400).send("Unable to create new data!");
        }
        res.status(200).send("Data recorded successfully!");
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

router.get('/admin/view_records', async (req, res) => {
    try{
        const records = await Users.find({});
        if(!records) {
            return res.status(404).send("No record found!")
        }
        let data = []
        for(record of records){
            data.push(record.email);
        }
        res.status(200).json(...data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
module.exports = router;