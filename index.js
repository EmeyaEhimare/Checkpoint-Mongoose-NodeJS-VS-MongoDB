import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import Person from './models/personModel.js'
import express from 'express'
const app = express()
import route from './routes/personRoutes.js'

dotenv.config()

const PORT = process.env.PORT

app.use('/', route)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("mongodb is running")
})
.catch((err) => {
    console.log(err)
})

// const onePErson = function(name, age, favoriteFoods){
//     this.name = name
//     this.age = age
//     this.favoriteFoods = favoriteFoods || []
// }

// Create and Save a Record of a Model:
const personName = "Alicia"
const personAge = 43
const personfavoriteFoods = ['Applepie', 'Ofada Rice']

const Alicia = {
    name:personName,
    age: personAge, 
    favoriteFoods:personfavoriteFoods 
}

// async function savedPerson(){
//     try{
//         const savedPerson = await Person.create(Alicia)
//         console.log(`Person saved successfully: ${savedPerson}`)
//     }catch(err){
//         console.error(`Error saving person: ${err}`)
//     }finally{
//         mongoose.connection.close()
//     }
// }

 

// Create Many Records with model.create()
const manyRecords =[
    {
        name: 'Fred',
        age: 53,
        favoriteFoods: ['eggs', 'shawarma']
    },
    {
        name:'Jocelyn',
        age:25,
        favoriteFoods: ['steak', 'alcohol']
    },
    {
        name:'Sasha',
        age: 31,
        favoriteFoods: ['mashed potatoes', 'ice cream']
    }
]

const newPersons = async() =>{
    try{
        const savePersons = await Person.create(manyRecords)
        console.log(`new persons created successfully: ${savePersons}`)
    } catch(err){
        console.log(`error saving new person: ${err}`)
    }finally{
        mongoose.connection.close()
    }
}

const morePersons = [
    { name: 'Beatrice', age: 42, favoriteFoods: ['pasta', 'salad'] },
    { name: 'Omar', age: 18, favoriteFoods: ['pizza', 'sushi'] },
    { name: 'Mary', age: 37, favoriteFoods: ['chicken', 'vegetables'] },
    { name: 'David', age: 60, favoriteFoods: ['fish', 'fruits'] },
    { name: 'Emily', age: 22, favoriteFoods: ['burrito', 'soup'] },
    { name: 'Mary', age: 28, favoriteFoods: ['pasta', 'burrito'] },
    { name: 'Carlos', age: 45, favoriteFoods: ['tacos', 'burrito'] }
]


const addPersons = async() =>{
    try{
        const saveMorePersons = await Person.create(morePersons)
        console.log(`new persons created successfully: ${saveMorePersons}`)
    } catch(err){
        console.log(`error saving new person: ${err}`)
    }finally{
        mongoose.connection.close()
    }
}

// addPersons()
// newPersons()

// Use model.find() to Search Your Database

// const documenttofind = {name:'Sasha'}

// const main = async () => {
//     try{
//         let result = await Person.find(documenttofind)
//         console.log(result)
//     }catch(err){
//         console.error(`error finding document: ${err}`)
//     }
// }

// main()



// Use model.findOne() to Return a Single Matching Document from Your Database

// const documenttofind = {favoriteFoods:'mashed potatoes'}

// const main = async () => {
//     try{
//         const result = await Person.findOne(documenttofind)
//         console.log(`document found succefully ${result}`)
//     }catch(err){
//         console.log(`error finding document ${err}`)
//     }
// }

// main()



// Use model.findById() to Search Your Database By _id

// const documenttofind = {_id:'6687dabd3bb4a238a0e81b48'}

// const main = async () => {
//     try{
//         let result = await Person.findById(documenttofind)
//         console.log(`document found successfully : ${result}`)
//     }catch(err){
//         console.log(`error found document: ${err}`)
//     }
// }

// main()


// Perform Classic Updates by Running Find, Edit, then Save

// const documenttofind = {_id:'6687dabd3bb4a238a0e81b48'}

// const main = async () => {
//     try{
//         let person = await Person.findById(documenttofind)
//         person.favoriteFoods.push('Hamburgers')
//         await person.save()
//         console.log(`document found successfully : ${person}`)

//     }catch(err){
//         console.log(`error found document: ${err}`)
//     }finally{
//         mongoose.connection.close()
//     }
// }

// main()


// Perform New Updates on a Document Using model.findOneAndUpdate()

// const documentToFind = {name:'Alicia'}
// const update = {age:20}

// const main = async () => {
//     try{
//         let result = Person.findOneAndUpdate(documentToFind,update,{new:true})
//         console.log(`document updated successfully ${result}`)
//     }catch(err){
//         console.log(`error findind and updating document: ${err}`)
//     }finally{
//         mongoose.connection.close()
//     } 
// }
// main()


// Delete One Document Using model.findByIdAndRemove

// const documentToFind = {_id :'6687dabd3bb4a238a0e81b49'}

// const main = async() => {
//     try{
//     const result = await Person.findByIdAndDelete(documentToFind)
//     console.log(`successfully removed document: ${result}`)
//     }catch(err){
//         console.log(`error finding document: ${err}`)
//     }finally{
//         mongoose.connection.close()
//     }
// }

// main()

//MongoDB and Mongoose - Delete Many Documents with model.remove()

// const documentToFind = {name:'Mary'}

// const main = async() => {
//     try{
//         let result = await Person.deleteMany(documentToFind)
//         console.log(`document successfuly deleted ${(await result).deletedCount}`)
//     }catch(err){
//         console.log(`error deleting document ${err}`)
//     } finally{
//         mongoose.connection.close()
//     }
// }

// main()


// Chain Search Query Helpers to Narrow Search Results

const main = async() => {
    try {
        let result = await Person.find({favoriteFoods:'burrito'}).sort({name:1}).limit(2).select({name:true,favoriteFoods:true})
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

main()












app.listen(PORT,(req,res) => {
    console.log(`server is running on ${PORT}`)
})