const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Organization = require("../models/Organization");

router.post('/add',[
    check('name','Name is required').not().isEmpty(),
    check('size','Size is required').not().isEmpty(),
    check('description','Description is required').not().isEmpty(),
],async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    
    const {name,size,description} = req.body;

    try {

        // let Organization = await Organization.findOne({ email });
  
        // if (Organization) {
        //   return res
        //     .status(400)
        //     .json({ errors: [{ msg: "Organization already exists" }] });
        // }

        let organization = new Organization({
            name,
            size,
            description
        });

        await organization.save();

        res.send("Organization Added");
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

router.get('/show',async (req,res)=>{

    try {
        const organization = await Organization.find();
        res.json(organization);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); 
    }
});

router.delete('/:id', async (req,res)=>{

    try {
        
        const organization = await Organization.findById(req.params.id);

        if (!organization) {
          return res.status(404).json({ msg: "Organization not found" });
        }
    
        await organization.remove();
        res.json({ msg: "Organization removed." });


    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
          return res.status(404).json({ msg: "Organization not found" });
        }
        res.status(500).send("Server Error"); 
    }

})

module.exports = router;