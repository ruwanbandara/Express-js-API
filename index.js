const express = require ('express');
const morgan = require('morgan');
const path = require('path');



const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
