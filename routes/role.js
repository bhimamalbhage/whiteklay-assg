const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Role = require("../models/Roles");

router.post('/add',[
    check('name','Name is required').not().isEmpty(),
    check('description','Description is required').not().isEmpty(),
],async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    
    const {name,description} = req.body;

    try {

        // let role = await Role.findOne({ email });
  
        // if (role) {
        //   return res
        //     .status(400)
        //     .json({ errors: [{ msg: "Role already exists" }] });
        // }

        let role = new Role({
            name,
            description
        });

        await role.save();

        res.send("Role Added");
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

router.get('/show',async (req,res)=>{

    try {
        const roles = await Role.find();
        res.json(roles);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); 
    }
});

router.delete('/:id', async (req,res)=>{

    try {
        
        const role = await Role.findById(req.params.id);

        if (!role) {
          return res.status(404).json({ msg: "Role not found" });
        }
    
        await role.remove();
        res.json({ msg: "Role removed." });


    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
          return res.status(404).json({ msg: "Role not found" });
        }
        res.status(500).send("Server Error"); 
    }

})

module.exports = router;