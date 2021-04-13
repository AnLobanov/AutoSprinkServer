const server = require('express')
const api = server()

var nowData
api.get('/push', function(req, res) {
    nowData = req.query
    res.status(201).send({
        status: "Created",
        data: nowData
    })
})

api.get('/get', function(req, res) {
    res.status(200).send({
        data: nowData
    })
})

api.listen(80)