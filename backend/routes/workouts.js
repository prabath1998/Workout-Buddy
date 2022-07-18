const express = require('express');
const { createWorkout, getWorkouts, getWorkout,deleteWorkout } = require('../controllers/workoutController')
const router = express.Router();

//Get all workouts
router.get('/',getWorkouts);

//get single workout
router.get('/:id',getWorkout)

//post new workout
router.post('/',createWorkout)

//delete workout
router.delete('/:id',deleteWorkout)

//update workout
router.patch('/:id',(req,res)=>{
    res.json({message:"update workout"})
})

module.exports = router;