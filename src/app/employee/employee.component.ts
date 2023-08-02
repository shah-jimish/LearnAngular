import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService] 
})
export class EmployeeComponent{

  empName: string = "Jimish";

  constructor(private roomService: RoomsService) {}

}
