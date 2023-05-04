import { bookRoom } from "application";

interface BookRoomRequest {
    hotelId: string;
    roomId: string;
}

function bookRoomRequest({ hotelId, roomId }: BookRoomRequest) {
    bookRoom(hotel, roomId);
}

export default bookRoom;
