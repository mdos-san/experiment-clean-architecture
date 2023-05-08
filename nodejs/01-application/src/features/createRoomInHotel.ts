import { Room } from "business";
import { getAdapters } from "../ports";

function createRoomInHotel(newRoom: Room) {
    let adapters = getAdapters();
    adapters.storage.create("room", newRoom.id, JSON.stringify(newRoom));
}

export default createRoomInHotel;
