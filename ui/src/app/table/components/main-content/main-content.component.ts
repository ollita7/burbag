import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BeersService } from '../../../services/beers.service';
import { Observable } from 'rxjs/Observable';
import { BeerItem } from '../../../models/Persons';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public beers: BeerItem[] = [];

  constructor(private beersService: BeersService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'plus-icon',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/ic_add_white_18px.svg'));
  }


  }
  ngOnInit() {
    this.beersService.getBeers().subscribe((items: BeerItem[]) => {
      this.beers = items;
    });
  }
  public trackByFn(item: BeerItem) {
    return item != null ? item.id : null;
  }
}
