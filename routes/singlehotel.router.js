const express = require('express');
const router = express.Router();

const Hotel = require('../model/hotel.model');
const { Route } = require('express');
//const hotels = require('../data/hotels');

router.route("/:id").get( async (req, res) =>{
    try{
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel);

    }
    catch(err){
        res.status(404).json({message: "No hotel found."})
        //console.log(err);
    }
})

module.exports = router;