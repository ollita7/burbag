import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FakeDataService } from './services/fake-data.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

