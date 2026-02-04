const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let pendingTasks = [
    "Complete AI Lab",
    "Study DBMS Joins",
    "Prepare Hotel Project PPT"
];

let completedTasks = [];

app.get("/", (req, res) => {

    let pendingHTML = "";
    pendingTasks.forEach((task, index) => {
        pendingHTML += `
        <li>
            ${task}

            <form action="/complete" method="POST" style="display:inline;">
                <input type="hidden" name="index" value="${index}">
                <button type="submit">Complete</button>
            </form>

            <form action="/deletePending" method="POST" style="display:inline;">
                <input type="hidden" name="index" value="${index}">
                <button type="submit"> sDelete</button>
            </form>
        </li>
        `;
    });

    let completedHTML = "";
    completedTasks.forEach((task, index) => {
        completedHTML += `
        <li>
            ${task}

            <form action="/deleteCompleted" method="POST" style="display:inline;">
                <input type="hidden" name="index" value="${index}">
                <button type="submit">🗑 Delete</button>
            </form>
        </li>
        `;
    });

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Task Manager</title>
            <style>
                body {
                    font-family: Arial;
                    margin: 30px;
                }
                button {
                    margin-left: 10px;
                    padding: 5px 10px;
                    cursor: pointer;
                }
                h1 {
                    color: darkblue;
                }
                .box {
                    border: 1px solid gray;
                    padding: 15px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                }
            </style>
        </head>

        <body>

            <h1>->Express Task Manager</h1>

            <div class="box">
                <h2>Add New Task</h2>
                <form action="/add" method="POST">
                    <input type="text" name="task" placeholder="Enter new task" required>
                    <button type="submit">Add</button>
                </form>
            </div>

            <div class="box">
                <h2>->Pending Tasks</h2>
                <ul>
                    ${pendingHTML}
                </ul>
            </div>

            <div class="box">
                <h2>->Completed Tasks</h2>
                <ul>
                    ${completedHTML}
                </ul>
            </div>

        </body>
        </html>
    `);
});

app.post("/add", (req, res) => {
    const newTask = req.body.task;
    pendingTasks.push(newTask);
    res.redirect("/");
});

app.post("/complete", (req, res) => {
    const index = req.body.index;
    const finishedTask = pendingTasks.splice(index, 1);
    completedTasks.push(finishedTask[0]);
    res.redirect("/");
});

app.post("/deletePending", (req, res) => {
    const index = req.body.index;
    pendingTasks.splice(index, 1);
    res.redirect("/");
});

app.post("/deleteCompleted", (req, res) => {
    const index = req.body.index;
    completedTasks.splice(index, 1);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Task Manager running at http://localhost:3000");
});
