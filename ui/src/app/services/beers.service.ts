import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BeerItem } from '../models/Persons';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  public beers: AngularFireList<BeerItem>;
  constructor(public firebase: AngularFireDatabase, private http: HttpClient) {
    this.beers = this.firebase.list('beers');
  }

  public getBeers(): Observable<BeerItem[]> {
    return this.beers.valueChanges();
  }

  public buyBeer(name: string, howMany: number): any {
    console.log('buyBeer', name);
    this.http.post('http://localhost:3000/buying', { brand: name, quantity: howMany }).toPromise()
      .then((data: any) => { console.log('nada'); });
  }

}
