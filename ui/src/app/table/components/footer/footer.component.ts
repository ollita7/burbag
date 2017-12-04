import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  public panelOpenState = false;
  public isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  public tooglePersonalInfo(): void {
    this.isOpen = !this.isOpen;
  }

}
