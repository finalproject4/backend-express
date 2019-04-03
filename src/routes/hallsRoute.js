import express from 'express';
import models from '../db/models';

const router = express.Router();

router.get('/api/halls', (req, res) => {
    models.Hall.findAll()
        .then(halls => {

            res.status(200).json({ halls: halls })

        }).catch(e => console.log(e));

});

router.get('/api/hall/:id', (req, res) => {
    models.Hall.findByPk(req.params.id, 
        {include: [{model: models.Hreservation,
        as: "hreservations"}]
    })
        .then(hall => {

            res.status(200).json({ hall: hall })



        }).catch(e => console.log(e));

});

router.get('/api/user/:id/halls', (req, res) => {
    const  id = req.params.id
    models.User.findByPk(id , 
     {include: 
         [{model: models.Hall}]
     })
    .then( user => {
        console.log(user)
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
  
  
  });

router.post('/api/user/:id/halls', (req, res) => {

    models.Hall.create({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        location: req.body.location,
        size: req.body.size,
        section: req.body.section,
        user_id: req.params.id
    
    })
        .then(hall => {
            res.status(200).json({ hall: hall })



        }).catch(e => console.log(e));

});
router.put('/api/hall/:id', (req, res) => {
    models.Hall.findByPk(req.params.id)
        .then(hall => {

            hall.update({
                name: req.body.hall.name,
                price: req.body.hall.price,
                type: req.body.hall.type,
                location: req.body.hall.location,
                size: req.body.hall.size,
                section: req.body.hall.section

            }).then(
                res.status(200).json({ hall: hall }

                ))


        }).catch(e => console.log(e));



});
router.delete('/api/hall/:id', (req, res) => {
    models.Hall.findByPk(req.params.id)
        .then(hall => {

            hall.destroy().then(
                res.status(200).json({result:`Hall ID ${req.params.id} Deleted`})

            )


        }).catch(e => console.log(e));



});

export default router;

