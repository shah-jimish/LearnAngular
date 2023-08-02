import { Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelInventory';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService:LoggerService,
  @Inject(localStorageToken) private localStorage:Storage){}

  ngOnInit() {
    this.loggerService?.log('AppComponent.OnInit()');
    this.name.nativeElement.innerText = "Something!";
    this.localStorage.setItem('name','Jimish');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(){
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
