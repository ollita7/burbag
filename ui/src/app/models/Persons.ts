export interface Persons {
    name: string;
    debt: number;
    pic: string;
    id: string;
    added?: boolean;
}

export interface PersonsState {
    persons: Array<Persons>;
}

export class BeerItem {
    public id: number;
    public name: string;
    public price: number;
    public basePrice: number;
    constructor(n: string, p: number, bp: number, i: number) {
        this.name = n;
        this.price = p;
        this.basePrice = bp;
        this.id = i;
    }

}
