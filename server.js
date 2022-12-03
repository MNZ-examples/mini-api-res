const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'librery',
}


// Middlewares -----------------------------------------------
app.use(myconn(mysql, dbOptions, 'single')); 
app.use(express.json())


// Rutas -----------------------------------------------
app.get('/', (req, res) => {
    res.send('welcome to my app')
})

app.use('/api', routes)
// Server Runing -----------------------------------------------
app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});