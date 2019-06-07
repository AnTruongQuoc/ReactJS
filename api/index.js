const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors())

app.get('/api/hello', cors(), (req, res) => {
    res.send({
        members: [
            {
                name: 'an',
                class: 'web-d002'
            },
            {
                name: 'hoang',
                class: 'web-d002'
            },
            {
                name: 'hoangloli',
                class: 'web-d002'
            },
            {
                name: 'anloli',
                class: 'web-d002'
            }
        ]
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))