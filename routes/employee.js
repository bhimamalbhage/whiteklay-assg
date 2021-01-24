const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Employee = require("../models/Employee");

router.post('/add',[
    check('name','Name is required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('role','Role is required').not().isEmpty(),
    check('organization','Organization is required').not().isEmpty(),
],async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    
    const {name,email,role,organization} = req.body;

    try {

        let employee = await Employee.findOne({ email });
  
        if (employee) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Employee already exists" }] });
        }

        employee = new Employee({
            name,
            email,
            role,
            organization
        });

        await employee.save();

        res.send("Employee Added");
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

router.get('/show',async (req,res)=>{

    try {
        const employess = await Employee.find();
        res.json(employess);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); 
    }
});

router.delete('/:id', async (req,res)=>{

    try {
        
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
          return res.status(404).json({ msg: "Employee not found" });
        }
    
        await employee.remove();
        res.json({ msg: "Employee removed." });


    } catch (error) {
        console.error(error.message);
        if (error.kind === "ObjectId") {
          return res.status(404).json({ msg: "Employee not found" });
        }
        res.status(500).send("Server Error"); 
    }

})


module.exports = router;