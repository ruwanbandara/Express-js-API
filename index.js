const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const request  = require('request');
const bodyParser = require('body-parser');
const members = require('./members');

const logger = require('./middleware/logger');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends:false}));
app.use((bodyParser.json()));



//Init middleware
app.use(logger);


//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/about', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


//Gets All Members
app.get('/api/members', (req, res) => { res.json(members);

   /* request.get('https://express-api-janaka.herokuapp.com/products', (request,result,next) =>{
        res.json(result.body);
    });*/


});

//get singale member

app.get('/api/members/:id',(req, res) =>{
    res.json(members.filter(member => member.id === parseInt(req.params.id)));

});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
