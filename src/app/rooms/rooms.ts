export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomNumber: string;
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date,
    rating: number
}