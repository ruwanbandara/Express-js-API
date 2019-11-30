const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');



//Gets All Members
router.get('/', (req, res) => { res.json(members);

    /* request.get('https://express-api-janaka.herokuapp.com/products', (request,result,next) =>{
         res.json(result.body);
     });*/


});

//get singale member

router.get('/:id',(req, res) =>{

    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));


    }else{
        res.status(400).json({mag: `No member with the id of ${req.params.id}`});

    }

});

//create member
router.post('/', (req, res) =>{
    // get post data in body variable
    // res.send(req.body);
    // console.log(req.body)

})
module.exports = router;
