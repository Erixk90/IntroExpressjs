const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, () => {
    console.log('listening on port 3030')
})

app.get ('/', (req, res) => {
    let pathHome = path.join(__dirname, './views/index.html')
    res.sendFile(pathHome)
})

app.get ('/babbage', (req, res) => {
    let pathHome = path.join(__dirname, './views/babbage.html')
    res.sendFile(pathHome)
})

app.get ('/berners-lee', (req, res) => {
    let pathHome = path.join(__dirname, './views/berners-lee.html')
    res.sendFile(pathHome)
})

app.get ('/clarke', (req, res) => {
    let pathHome = path.join(__dirname, './views/clarke.html')
    res.sendFile(pathHome)
})
app.get ('/hamilton', (req, res) => {
    let pathHome = path.join(__dirname, './views/hamilton.html')
    res.sendFile(pathHome)
})

app.get ('/hopper', (req, res) => {
    let pathHome = path.join(__dirname, './views/hopper.html')
    res.sendFile(pathHome)
})

app.get ('/index', (req, res) => {
    let pathHome = path.join(__dirname, './views/index.html')
    res.sendFile(pathHome)
})

app.get ('/lovelace', (req, res) => {
    let pathHome = path.join(__dirname, './views/lovelace.html')
    res.sendFile(pathHome)
})

app.get ('/turing', (req, res) => {
    let pathHome = path.join(__dirname, './views/turing.html')
    res.sendFile(pathHome)
})

app.use(express.static('public'));