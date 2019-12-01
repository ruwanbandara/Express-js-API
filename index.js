const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const request  = require('request');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const exphbs  = require('express-handlebars');
const members = require('./Members')

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Home page route
app.get('/', (req, res) => res.render('index',{
    title: 'Member app',
    members
}));

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends:false}));
app.use((bodyParser.json()));
app.use(express.json());
app.use(express.urlencoded({extended: false}));




//Init middleware
app.use(logger);


//
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/about', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });





//Member API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
