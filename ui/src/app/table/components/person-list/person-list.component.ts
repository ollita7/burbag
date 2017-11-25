import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Persons, PersonsState } from '../../../models/Persons';
import { FakeDataService } from '../../../services/fake-data.service.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {
  @Input() sidenav: MatSidenav;
  private persons: Array<Persons>;
  private subscription: Subscription;
  constructor(private fakeService: FakeDataService) {
    this.persons = this.fakeService.getPersons();
  }

  ngOnInit() {
    this.subscription = this.fakeService.personState
      .subscribe((state: PersonsState) => {
        this.persons = state.persons;
      });
  }

  public addPerson(): void {
    const person: Persons = {
      name: 'Guille Fernandez',
      debt: 500,
      pic: `https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-1/p50x50/12509893_
      10156538689935193_940111063769697666_n.jpg?oh=6399b1aa510bb86492057cc678d9c6cc&oe=5A9A59B2`,
      id: '1',
      added: true
    };
    this.fakeService.addPerson(person);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
