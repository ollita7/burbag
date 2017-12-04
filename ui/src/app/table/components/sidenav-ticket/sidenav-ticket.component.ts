import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-ticket',
  templateUrl: './sidenav-ticket.component.html',
  styleUrls: ['./sidenav-ticket.component.less']
})
export class SidenavTicketComponent implements OnInit {
  public isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  public tooglePayTicket(): void {
    this.isOpen = !this.isOpen;
  }

}
