const express = require('express');
const router = express.Router();

//Get all workouts
router.get('/',(req,res)=>{
    res.json({message:"get all workouts"})
});

//get single workout
router.get('/:id',(req,res)=>{
    res.json({message:"get single workout"})
})

//post new workout
router.post('/',(req,res)=>{
    res.json({message:"post new workout"})
});

//delete workout
router.delete('/:id',(req,res)=>{
    res.json({message:"delete a workout"})
})

//update workout
router.patch('/:id',(req,res)=>{
    res.json({message:"update workout"})
})

module.exports = router;