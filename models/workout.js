const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "need an excercise"
        },
        name: {
            type: String,
            required: "enter a name"
        },
        duration: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
       
    }]
    
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;
