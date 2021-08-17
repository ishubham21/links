const express = require('express')
const app = express()

const path = require('path')
const port = process.env.PORT || 8000

const links = require('./links.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.ejs', {links: links})
})

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})