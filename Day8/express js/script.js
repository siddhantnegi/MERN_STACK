const express = require('express')
const app = express()


app.get('/products',(req, res)=>{
res.send('This is Home Page')
})

app.post('/products', (res, req)=>{
    res.send('<h1>Welcome POST</h1>')
})

app.delete('/products', (res, req)=>{
    res.send('<h1>Welcome DELETE</h1>')
})

app.put('/products', (res, req)=>{
    res.send('<h1>Welcome PuT</h1>')
})

app.listen(1400)