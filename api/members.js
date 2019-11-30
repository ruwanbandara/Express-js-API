const express = require('express');
const router = express.Router();
const members = require('./members');



//Gets All Members
router.get('/api/members', (req, res) => { res.json(members);

    /* request.get('https://express-api-janaka.herokuapp.com/products', (request,result,next) =>{
         res.json(result.body);
     });*/


});

//get singale member

router.get('/api/members/:id',(req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));


    }else{
        res.status(400).json({mag: `No member with the id of ${req.params.id}`});

    }

});

module.exports = router;
