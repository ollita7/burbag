import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BeerItem } from '../models/Persons';

@Injectable()
export class BeersService {
  public beers: AngularFireList<BeerItem>;
  constructor(public firebase: AngularFireDatabase) {
    this.beers = this.firebase.list('beers');
  }

  public getBeers(): Observable<BeerItem[]> {
    return this.beers.valueChanges();
  }

}
