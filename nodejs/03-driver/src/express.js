import adapter from 'adapter'
import express from 'express'

const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.send(adapter.user.create())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

