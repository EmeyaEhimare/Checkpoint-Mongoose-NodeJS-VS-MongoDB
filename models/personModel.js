import mongoose from "mongoose";

const Schema = mongoose.Schema

const personSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    age: {
        type: Number,
    },
    favoriteFoods: {
        type:Array
    }
})

const Person = mongoose.model('Person', personSchema)

export default Person

