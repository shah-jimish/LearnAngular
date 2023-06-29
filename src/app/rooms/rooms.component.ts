import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';

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

  constructor(private roomService:RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomService.getRooms();
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
