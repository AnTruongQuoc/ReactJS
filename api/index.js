require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const pg = require('pg')
const config = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
}
const pool = new pg.Pool(config)
//var obj = {}

//app.use(express.static(__dirname + '/assets'))

//app.set('view engine', 'ejs') 

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

app.get('/api/farms', cors(), (req,res,next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT farms.id, farms.name, farms.owner, farms.address, products.name as prodname, farms.product_id, farms.phone from farms, products where products.id = farms.product_id', function (err, result) {
             done()
             if (err) {
                 console.log(err)
                 res.status(400).send(err)
             }
             res.send({
                 farms: result.rows
                })
           
        })
    })
})

app.get('api/categories', (req,res,next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM categories', function (err, result) {
             done()
             if (err) {
                 console.log(err)
                 res.status(400).send(err)
             }
             res.send({
                 cates: result.rows
                })
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))