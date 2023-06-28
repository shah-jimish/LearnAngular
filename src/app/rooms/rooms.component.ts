import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Test hotel';
  numberOfRooms = 10;
  hideRooms = false;


  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent>;  
  

  title = "Room List";

  constructor() { }

  ngOnInit(): void {
    
    //console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
        price: 500,
        photo: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
        checkInTime: new Date('18-June-2023'),
        checkOutTime: new Date('19-June-2023'),
        rating: 5
      },
      {
        roomNumber: 2,
        roomType: 'Delux2 Room',
        amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
        price: 800,
        photo: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061',
        checkInTime: new Date('20-June-2023'),
        checkOutTime: new Date('21-June-2023'),
        rating: 3.45654
      },
      {
        roomNumber: 3,
        roomType: 'Delux3 Room',
        amenities: 'AC, Wifi, BreakFast, TV, Hot-Water',
        price: 1000,
        photo: 'https://images.unsplash.com/photo-1609949279531-cf48d64bed89',
        checkInTime: new Date('25-June-2023'),
        checkOutTime: new Date('26-June-2023'),
        rating: 2.6
      }
    ];

  }

  ngDoCheck() {
    console.log("on changes is called");
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Room View";
    this.headerChildrenComponent.last.title="Last Title";
    //this.headerChildrenComponent.get(0)?.title = "first";
  }
  ngAfterViewChecked(){

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "new added",
      amenities: "something",
      price: 1500,
      photo: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      checkInTime: new Date('22-June-2023'),
      checkOutTime: new Date('23-June-2023'),
      rating: 4.6
    };
    this.roomList = [...this.roomList, room];
  }

  ngDestroy(){
    console.log("on destroy called");
  }
}
