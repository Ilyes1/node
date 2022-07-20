const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    async function getUniv() {
        await axios.get('http://universities.hipolabs.com/search?country=united states')
        .then(data => res.render('index', {'items': data.data}))
    }
    getUniv() 
})

app.post('/country', (req, res) => {
    const country = req.body.country

    async function getUniv() {
        await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(data => res.render('index', {'items': data.data}))
    }
    getUniv()
})

// app.get('/univ', (req, res) => {
//     async function getUniv() {
//         await axios.get('http://universities.hipolabs.com/search')
//         .then(data => res.send(data.data))
//     }
//     getUniv() 
// })

app.listen(3000 || process.env.PORT)