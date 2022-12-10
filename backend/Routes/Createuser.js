const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwt_secret="OneDayIWIllbeabestWebdeveloper#$"


router.post('/createUser',
    [
        body('email', 'invalid email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'incorrect password').isLength({ min: 5 }),
        body('name', 'invalid name').isLength({ min: 5 })
    ]
    ,
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const salt=await bcrypt.genSalt(15);
        const secure_password=await bcrypt.hash(req.body.password,salt)

        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secure_password
            })
            res.json({ success: true })
        } catch (error) {
            // console.log(error);
            res.json({ success: false })
        }

    })







router.post('/login',
    [
        body('email', 'invalid email').isEmail(),
        // password must be at least 5 chars long
        body('password', 'incorrect password').isLength({ min: 5 })
       
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        let email = req.body.email
        try {
            const useremailexits = await User.findOne({ email })
            if (!useremailexits) {
                return res.status(400).json({ errors: "User not registered" });
            }

            const password_compare=await bcrypt.compare(req.body.password,useremailexits.password)
           
            

            if (!password_compare) {
                return res.status(400).json({ errors: "password not match" });
            }
            // return token to user

            const data={
                user:{
                    id:useremailexits.id
                }
            }
            const authToken=jwt.sign(data,jwt_secret)
            return res.json({ success: true ,authToken:authToken})


        } catch (error) {
            // console.log(error);
            res.json({ success: false })
        }

    })












module.exports = router;