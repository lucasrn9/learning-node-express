const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
const users = [
    {
    id: 1,
    name: 'lucas',
    age: 20,
    email: 'lucas@gmail.com'
    },
    {
        id: 2,
        name: 'william',
        age: 25,
        email: 'william@gmail.com'
    },
    {
        id: 3,
        name: 'luiza',
        age: 19,
        email: 'luiza@gmail.com'
    },
    {
        id: 4,
        name: 'julia',
        age: 21,
        email: 'julia@gmail.com',
    }
]



app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET','POST','PUT'],
}))

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const user = users.find((u)=>u.id===parseInt(req.params.id))
    if(!user){
        return res.status(404).send('The user id given was not found')
    }
    res.json(user)
})

app.post('/users',(req,res)=>{
    res.json(req.body)
})

app.put('/users/:id',(req,res)=>{
    const user = users.find((u)=>u.id===parseInt(req.params.id))
    if(!user){
       return  res.status(404).send('The user id given was not found')
    }
    users[users.findIndex(u=>u.id===parseInt(req.params.id))].name = req.body.name
    users[users.findIndex(u=>u.id===parseInt(req.params.id))].age = req.body.age
    users[users.findIndex(u=>u.id===parseInt(req.params.id))].email = req.body.email
    res.send(users)
})

const port = 3333 || process.env.PORT
app.listen(port,()=>console.log(`Server is running on port ${port}`))