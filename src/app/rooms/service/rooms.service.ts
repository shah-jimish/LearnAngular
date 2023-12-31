import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Delux Room',
      amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
      price: 500,
      photo: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
      checkInTime: new Date('18-June-2023'),
      checkOutTime: new Date('19-June-2023'),
      rating: 5
    },
    {
      roomNumber: '2',
      roomType: 'Delux2 Room',
      amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
      price: 800,
      photo: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
      checkInTime: new Date('20-June-2023'),
      checkOutTime: new Date('21-June-2023'),
      rating: 3.45654
    },
    {
      roomNumber: '3',
      roomType: 'Delux3 Room',
      amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
      price: 1000,
      photo: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89',
      checkInTime: new Date('25-June-2023'),
      checkOutTime: new Date('26-June-2023'),
      rating: 2.6
    }
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,private http:HttpClient ) {
    console.log(this.config.apiEndPoint);
  }

  getRooms() {
    return this.http.get<RoomList[]>('api/rooms');    
    //return this.roomList;
  }
  
  addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms/',room);
  }

  editRoom(room : RoomList){
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`,room);
  }

  deleteRoom(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
}
