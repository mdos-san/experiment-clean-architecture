import createRoomInHotel from "./features/createRoomInHotel";
import { Ports, getAdapters, setAdapters } from "./ports";
import { Room } from "business/types";

export const ApplicationLayerFactory = (): ApplicationInterface => ({
    createRoomInHotel,
    start: () => {
        getAdapters().server.start();
    },
    setAdapters
})

export interface ApplicationInterface {
    createRoomInHotel: (newRoom: Room) => void;
    start: () => void;
    setAdapters: (adapters: Ports) => void;
}
