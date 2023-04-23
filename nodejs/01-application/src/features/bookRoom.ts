import { Hotel } from "business";

function bookRoom(hotel: Hotel, roomId: string) {
    const room = hotel.rooms[roomId];

    if (room.isBooked) {
        throw new Error(`Room ${roomId} is already booked`);
    }

    room.isBooked = true;
}

export default bookRoom;
