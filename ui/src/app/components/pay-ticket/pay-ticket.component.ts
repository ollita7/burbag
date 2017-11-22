import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pay-ticket',
  templateUrl: './pay-ticket.component.html',
  styleUrls: ['./pay-ticket.component.css']
})
export class PayTicketComponent implements OnInit {

  constructor() { }

  private displayedColumns: Array<string> = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 3, name: 'Patricia', weight: 100, symbol: 'Pa' },
  { position: 2, name: 'Pilsen', weight: 100, symbol: 'Pi' },
  { position: 3, name: 'Corona', weight: 300, symbol: 'Co' },
];
