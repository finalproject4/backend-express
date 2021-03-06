import express from 'express';
import models from '../db/models';

const router = express.Router();

router.get('/api/user/:id/res', (req, res) => {
 
   
    const id = req.params.id
    models.User.findByPk(id , 
     {include: 
         [{
             model: models.Reservation,
             as: "reservations"

        }]
     }
     )
    .then( user =>{
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
});
router.get('/api/user/:id/resd', (req, res) => {
 
   
    const id = req.params.id
    models.Tool.findAll(
     {
        attributes: ["type", "price"],
         include: 
         [{
             model: models.Reservation,
             as: "reservations",
             attributes: ["date"],


        }],
        where: {
            "$reservations.user_id$": id
        }
     }
     )  
    .then( user =>{
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
});

router.post('/api/user/:user_id/tool/:id', (req, res) => {
    const tool_id = req.params.id
    const user_id = req.params.user_id

    models.Reservation.create({
        user_id: user_id,
        tool_id: tool_id,
        date: req.body.date
    })
        .then(reservation => {

            res.status(200).json({ reservation: reservation })



        }).catch(e => console.log(e));

});

router.patch('/api/reservations/:id', (req, res) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {

            reservation.update({
            date: req.body.date
                

            }).then(
                res.status(200).json({ reservation: reservation }

                ))


        }).catch(e => console.log(e));



});
router.delete('/api/reservations/:id', (req, res) => {
    models.Reservation.findByPk(req.params.id)
        .then(reservation => {

            reservation.destroy().then(
                res.status(200).json({result:`Reservation ID ${req.params.id} Deleted`})

            )


        }).catch(e => console.log(e));



});

router.get('/api/user/:id/cres', (req, res) => {
 
    const id = req.params.id
    models.Tool.findAll({
        attributes: ["type", "price"],
        include: [
          {
            model: models.Reservation,
            attributes: ["date"],
            as: "reservations"
          }
        ],
        where: {
            user_id: id
          }
        
      })
    .then( user =>{
     res.status(200).json({user: user})
    })
    .catch( e => console.log(e))
});


  
export default router;
