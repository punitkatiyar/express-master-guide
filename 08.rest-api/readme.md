```
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", course: "React" },
    { id: 2, name: "Amit", course: "Node JS" }
];

// GET ALL
app.get("/students", (req, res) => {
    res.json(students);
});

// GET BY ID
app.get("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json(student);
});

// CREATE
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);

    res.status(201).json({
        message: "Student Added",
        student
    });
});

// UPDATE
app.put("/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json({
        message: "Student Updated",
        student
    });
});

// DELETE
app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(s => s.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    students.splice(index, 1);

    res.json({
        message: "Student Deleted"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

```
