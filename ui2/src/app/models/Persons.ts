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
