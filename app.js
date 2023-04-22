const express = require ('express')
const env=require('dotenv').config() 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/login');
  });
  

app.get('/login', (req, res) => {
    res.render('login.ejs');
  });

  app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
  })
