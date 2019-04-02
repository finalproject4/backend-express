import express from 'express';
import models from '../db/models';

const router = express.Router();

router.get('/api/tools', (req, res) => {
    models.Tool.findAll()
        .then(tools => {

            res.status(200).json({ tools: tools })

        }).catch(e => console.log(e));

});

router.get('/api/tool/:id', (req, res) => {
    models.Tool.findByPk(req.params.id,    
        {include: [{model: models.Reservation}]
    })
        .then(tool => {

            res.status(200).json({ tool: tool })



        }).catch(e => console.log(e));

});
router.post('/api/user/:id/tools', (req, res) => {

    models.Tool.create({
        price: req.body.price,
        type: req.body.type,
        quantity: req.body.quantity,
        user_id: req.params.id
    })
        .then(tool => {
            res.status(200).json({ tool: tool })



        }).catch(e => console.log(e));

});
router.put('/api/tool/:id', (req, res) => {
    models.Tool.findByPk(req.params.id)
        .then(tool => {

            tool.update({
                price: req.body.tool.price,
                type: req.body.tool.type,
                quantity: req.body.tool.quantity,
                

            }).then(
                res.status(200).json({ tool: tool }

                ))


        }).catch(e => console.log(e));



});
router.delete('/api/tool/:id', (req, res) => {
    models.Tool.findByPk(req.params.id)
        .then(tool => {

            tool.destroy().then(
                res.status(200).json({result:`Tool ID ${req.params.id} Deleted`})

            )


        }).catch(e => console.log(e));



});
router.get('/api/user/:id/tools' , (req, res) =>{
    const  id = req.params.id
    console.log(id)
    models.User.findByPk(id , 
     {include: 
         [{model: models.Tool}]
     })
    .then( user =>{
        console.log(user)
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
  
  
  })
export default router;

