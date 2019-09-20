export interface IPokemonCard {
    name: string;
    img: string;
    id: number;
    types: Array<IPokemonType>;
    gender: string;
}

export interface IPokemonType {
    slot: number;
    type: IElementType;
}

export interface IElementType {
    name: string;
    url: string;
}
