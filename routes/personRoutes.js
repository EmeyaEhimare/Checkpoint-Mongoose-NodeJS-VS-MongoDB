import {Router} from 'express'
const route = Router()
import Person from '../models/personModel.js'


route.get('/', (req,res) => {
    res.status(200).send("it worked")
})

route.post('/',(req,res)=> {
    const{name,age,favoriteFoods} = req.body

})

export default route