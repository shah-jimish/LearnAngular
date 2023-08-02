import { Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers : [RoomsService]
})
export class ContainerComponent {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(@Host() private roomService: RoomsService) { }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "New Name";
  }
}
