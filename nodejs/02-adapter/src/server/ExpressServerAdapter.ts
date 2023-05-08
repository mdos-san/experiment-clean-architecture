import { ApplicationInterface } from "application";
import { ServerPort } from "application/types/ports";
import express from 'express';
const app = express()
const port = 3000

export const ExpressServerAdapterFactory = (application: ApplicationInterface): ServerPort => ({
    start: () => {
        app.post('/hotel/:hotelId/room/:roomId', (req, res) => {
            application.createRoomInHotel({
                id: req.params.roomId,
                hotelId: req.params.hotelId,
                isBooked: false
            });
            res.send(JSON.stringify(req.params))
        })

        app.listen(port, () => {
            console.log(`[ExpressServerAdapter]: Started on port ${port}`)
        })
    },
})

