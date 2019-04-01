import express from 'express';
import models from '../db/models';

const router = express.Router();

router.get('/api/user/:id/hres', (req, res) => {
 
   
    const id = req.params.id
    models.User.findByPk(id , 
     {include: 
         [{model: models.Reservation}]
     }
     )
    .then( user =>{
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
});

router.post('/api/user/:user_id/hall/:id', (req, res) => {
    const hall_id = req.params.id
    const user_id = req.params.user_id

    models.Hreservation.create({
        user_id: user_id,
        hall_id: hall_id,
        date: req.body.date
    })
        .then(reservation => {

            res.status(200).json({ reservation: reservation })



        }).catch(e => console.log(e));

});

router.put('/api/hreservation/:id', (req, res) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {

            reservation.update({
            date: req.body.date
                

            }).then(
                res.status(200).json({ reservation: reservation }

                ))


        }).catch(e => console.log(e));



});
router.delete('/api/hreservation/:id', (req, res) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {

            reservation.destroy().then(
                res.status(200).json({result:`Reservation ID ${req.params.id} Deleted`})

            )


        }).catch(e => console.log(e));



});


  
export default router;
