import express from 'express'
import path from 'path'
import db from './models/index.js'

const __dirname = path.resolve()

const app = express()
const PORT = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../practice_project_redux_1/build')))

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../practice_project_redux_1/build/index.html'))
})

app.post('/', async (req, res) => {
    const result = await db.TodosTable.findAll({
        order: [
            ['updatedAt']
        ]
    })
    res.send({result: true, todos: result})
})
app.post('/register-todo', async (req, res) => {
    try {
        const result = await db.TodosTable.create({
            name: req.body.name,
            progress: 'todo'
        })
        res.send({result: true, todo: result})
    } catch (e) {
        console.log(e)
    }
    
})
app.patch('/todo/:id/:status', async (req, res) => {
    try {
        const {id: todoId, status: progress} = req.params
        const result = await db.TodosTable.update({progress}, {where: {id: Number(todoId)}})
        res.send({result: true, data: result})
    } catch (e) {
        console.log(e)
    }
})
app.delete('/todo/:id', async (req, res) => {
    try {
        const {id: todoId} = req.params
        const destoyTarget = await db.TodosTable.findOne({
            where: {
                id: Number(todoId)
            }
        })
        const result = await destoyTarget.destroy({
            where: {
                id: Number(todoId)
            }
        })
        res.send({result})
    } catch (e) {
        console.log(e)
    }
})

db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('localhost:8000')
    }) 
})
