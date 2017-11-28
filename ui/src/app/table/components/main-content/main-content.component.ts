import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BeersService } from '../../../services/beers.service';
import { Observable } from 'rxjs/Observable';
import { BeerItem } from '../../../models/Persons';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public beers: BeerItem[] = [];
  constructor(private beersService: BeersService) {

  }
  ngOnInit() {
    this.beersService.getBeers().subscribe((items: BeerItem[]) => {
      this.beers = items;
      console.log(items);
    });
  }
  public trackByFn(item: BeerItem) {
    return item != null ? item.id : null;
  }
}
