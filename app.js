
const express = require('express') // importing the express
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("hello js camp 1.o")
})
// app.get('/features', (req, res) => {
//     // res.send("<h1>a test runner built for humans</h1>");
//     // res.send("a test runner built for humans");
//     res.status(200).send("a test runner built for humans");
// })

app.get("/insta", (req, res) => {
    const insta = {
        username: "jyotisingh__",
        following: 20,
        follwer: 30,
    }
    res.status(200).json({ instaa })
})
app.get('/twitter', (req, res) => {
    // json for twitter-- passing multiple data
    const twitter = {
        userName: "jyoti_330",
        following: 40,
        follower: 70
    }
    res.status(200).json({ twitter });
})
app.get('/api/v1/:tokens', (req, res) => {
    console.log(req.params.tokens);
    res.status(200).json({ param: req.params.tokens })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})