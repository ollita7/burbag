import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public menuItems: Array<IMenuItems>;
  constructor() { }



  ngOnInit() {
    this.menuItems = [{
      name: 'sarasa1',
      price: 500,
      img: `https://i.pinimg.com/originals/8a/53/24/8a532461a80c7ee61a2c3cbee44d7151.jpg`
    }, {
      name: 'sarasa2',
      price: 500,
      img: `https://i.pinimg.com/originals/8a/53/24/8a532461a80c7ee61a2c3cbee44d7151.jpg`
    }];
  }

}

export interface IMenuItems {
  name: string;
  price: number;
  img: string;
}
