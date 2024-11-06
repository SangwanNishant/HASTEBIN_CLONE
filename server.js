const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    const code = `Welcome to WasteBin
here you can write code and
share that with your friends`
    res.render('code_display',{code});
})


app.listen(3000)