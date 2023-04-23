import { Hotel, Room } from "business";

function createRoomInHotel(hotel: Hotel, newRoom: Room) {
    hotel.rooms[newRoom.id] = newRoom;
}

export default createRoomInHotel;
