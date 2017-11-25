import { Component, OnInit, Input } from '@angular/core';
import { Persons } from '../../../models/Persons';
import { FakeDataService } from '../../../services/fake-data.service.service';
@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() person: Persons;
  constructor(private fakeService: FakeDataService) { }

  ngOnInit() {
  }

  removePerson(person: Persons): void {
    this
      .fakeService
      .removePerson(person.id);
  }

}
