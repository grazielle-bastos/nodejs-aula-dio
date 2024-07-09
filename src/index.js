const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

const pagesPath = path.join(__dirname, "pages")

router.get("/", (req, res)=>{
    res.sendFile(path.join(pagesPath, "home.html"))
})

router.get("/contato", (req, res)=>{
    res.sendFile(path.join(pagesPath, "contato.html"))
})

app.use(router)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("servidor rodando")
})

/*Criação de servidor local, sem a biblioteca express:
const http = require("http")

const hostname = "localhost"
const port = 3333

const server = http.createServer((req, res)=>{
    res.setHeader("Content-type", "text/plain")
    res.end("hello world")
})

server.listen(port, hostname, ()=>{
    console.log("SERVIDOR RODANDO")
})
*/