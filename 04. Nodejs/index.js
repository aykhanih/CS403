const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

const students = [
    {
        id: 1,
        name: "aykhan"
    },
    {
        id: 2,
        name: "aykhan"
    },
    {
        id: 3,
        name: "aykhan"
    }
]

app.get("/students", (req, res) => {
    res.status(200).json(students)
})

app.get('/students/:id', (req, res) => {
    const param = req.params
    const student = students.find((item) => item.id == param.id)
    if (student) {
        return res.status(200).json(student)
    } else {
        return res.status(400).json('not found')
    }
})

app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    return res.status(201).json(student)
})

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index !== -1) {
        students[index] = { id, ...req.body };
        return res.json(students[index]);
    } else {
        return res.status(404).json('no student');
    }
});


app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === id);

    if (index !== -1) {
        const del = students.splice(index, 1);
        return res.json({ del });
    } else {
        return res.status(404).json("not found");
    }
});
