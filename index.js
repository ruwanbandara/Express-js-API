const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const request  = require('request');
const bodyParser = require('body-parser');


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends:false}));
app.use((bodyParser.json()));

const members = [
    {
        id: 1,
        name: 'updated',
        price: 999.99,

    },
    {
        id: 2,
        name: 'Ruwan',
        price: 853216.456,
    },

    {
        id: 3,
        name: 'Bandara',
        price: 8245.0236,
    }

];

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

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
