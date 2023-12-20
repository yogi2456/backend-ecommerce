import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("hello backend yogesh")
})

app.listen(8000, () => console.log("App is running on port 8000"))