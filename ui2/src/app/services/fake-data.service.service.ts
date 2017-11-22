import { Injectable } from '@angular/core';
import { Persons, PersonsState } from '../models/Persons';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FakeDataService {
  private personSubject = new Subject<PersonsState>();
  private persons: Array<Persons> = this.getPersons();
  public personState = this.personSubject.asObservable();

  constructor() { }

  public addPerson(_product: Persons) {
    this.persons.push(_product);
    this.personSubject.next(<PersonsState>{ persons: this.persons });
  }
  public removePerson(id: string) {
    this.persons = this.persons.filter((_item: Persons) => _item.id !== id);
    this.personSubject.next(<PersonsState>{ persons: this.persons });
  }

  public getPersons(): Array<Persons> {
    return [{
      name: 'Guille Fernandez',
      debt: 500,
      pic: `https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-1/p50x50/12509893_
      10156538689935193_940111063769697666_n.jpg?oh=6399b1aa510bb86492057cc678d9c6cc&oe=5A9A59B2`,
      id: '1',
      added: true
    },
    {
      name: 'Santiago Bermudez',
      debt: 500,
      pic: `https://scontent.fmvd2-1.fna.fbcdn.net/v/t1.0-1/c7.0.40.40/p40x40/560089_10200809610987714
      _156799655_n.jpg?oh=315ba5fd2776f65b60d2c268c543e358&oe=5AD77C17`,
      id: '2',
      added: true
    }];
  }

}
