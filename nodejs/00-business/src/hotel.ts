import { Room } from "./room";

export interface Hotel {
    rooms: Record<string, Room>
}
