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

    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price
    }

    if (!newMember.name || !newMember.price){
        return res.status(400).json({mag: 'Please include a name and price'});

    }
     members.push(newMember);
    res.json(members);


});

//update Member

router.put('/:id',(req, res) =>{

    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name :member.name;
                member.price = updMember.price ? updMember.price :member.price;

                res.json({msg: 'Member Update', member});
            }
        });
    }else{
        res.status(400).json({mag: `No member with the id of ${req.params.id}`});

    }

});


module.exports = router;
