const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))

hbs.registerPartials(path.join(__dirname, './views/partials'))

app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Paul\'s Homepage',
        homeActive: true,
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Paul',
        aboutActive: true,
        dogs: [
            {
                title: 'Mona',
                destination: '/mona',
                linkCaption: 'See Mona in Action!',
            },
            {
                title: 'Charlie',
                destination: '/charlie',
                linkCaption: 'See Charlie in Action!',
            },
            {
                title: 'Oscar',
                destination: '/oscar',
                linkCaption: 'See Oscar in Action!',
            },
            {
                title: 'Noxy',
                destination: '/noxy',
                linkCaption: 'See Noxy in Action!',
            },
            {
                title: 'Bibi',
                destination: '/bibi',
                linkCaption: 'See Bibi in Action!',
            },
        ],
    })
})

app.listen(3000)
