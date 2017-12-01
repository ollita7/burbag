import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pay-ticket',
  templateUrl: './pay-ticket.component.html',
  styleUrls: ['./pay-ticket.component.css']
})
export class PayTicketComponent implements OnInit {

  @Input() public isOpen: boolean;
  constructor() { }


  public response = {
    'business': {
      'name': 'More SuperMarket',
      'type': 'Store',
      'logo': '',
      'address': {
        'number': '#21',
        'street': 'Gayathri Nagar',
        'city': 'Hyderabad',
        'state': 'Telangana',
        'country': 'India',
        'zip': '500079'
      },
      'contact': {
        'tel': '242005521',
        'fax': '242005507',
        'email': 'sales@moresupermarkets.com'
      },
      'operator': {
        'id': '521',
        'name': 'Nageshwar'
      }
    },
    'date': '1466742898216',
    'data': [
      { 'name': 'Park Avenue', 'price': '45', 'quantity': '2' },
      { 'name': 'Tata Tea', 'price': '60', 'quantity': '1' },
      { 'name': 'Yeppie Noddle', 'price': '20', 'quantity': '4' },
      { 'name': 'Rice', 'price': '325', 'quantity': '1' }
    ]
  };

  ngOnInit() {
  }

}

