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
    models.Tool.findByPk(req.params.id)
        .then(tool => {

            res.status(200).json({ tool: tool })



        }).catch(e => console.log(e));

});
router.post('/api/tools', (req, res) => {

    models.Tool.create({
        price: req.body.price,
        type: req.body.type,
        quantity: req.body.quantity,
        user_id: req.body.user_id
    })
        .then(tool => {

            res.status(200).json({ tool: tool })



        }).catch(e => console.log(e));

});
router.put('/api/tool/:id', (req, res) => {
    models.Tool.findByPk(req.params.id)
        .then(tool => {

            tool.update({
                price: req.body.price,
                type: req.body.type,
                quantity: req.body.quantity,
                user_id: req.body.user_id

            }).then(
                res.status(200).json({ tool: tool }

                ))


        }).catch(e => console.log(e));



});
router.delete('/api/tool/:id', (req, res) => {
    models.Tool.findByPk(req.params.id)
        .then(tool => {

            tool.destroy().then(
                res.status(200).json("deleted succefully")

            )


        }).catch(e => console.log(e));



});
export default router;