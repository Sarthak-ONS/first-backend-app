const express = require('express')
const format = require('date-format')

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.status(200).send("<h1>hello from Sarthak</h1>")
})


app.get("/api/v1/instagram", (req, res) => {

    const instaSocial = {
        username: "flutterFame",
        followers: 66,
        follows: 70,
        date: format.asString('dd:MM:yyyy hh:mm:ss', new Date())
    }


    res.status(200).json(instaSocial)
})


app.get("/api/v1/linkedin", (req, res) => {

    const instaSocial = {
        username: "Sarthak Agarwal",
        followers: 500,
        follows: 40,
        date: format.asString('dd:MM:yyyy hh:mm:ss', new Date())
    }


    res.status(200).json(instaSocial)
})



app.get("/api/v1/facebook", (req, res) => {

    const instaSocial = {
        username: "Sarthak on Facebook",
        followers: 2000,
        follows: 500,
        date: format.asString('dd:MM:yyyy hh:mm:ss', new Date())
    }
    res.status(200).json(instaSocial)
})


app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({
        "params": req.params.token
    })
})



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})