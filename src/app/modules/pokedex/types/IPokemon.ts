export interface IPokemonCard {
  name: string;
  img: string;
  id: string;
  types: Array<IPokemonType>;
}

export interface IPokemonType {
  slot: number;
  type: IElementType;
}

export interface IElementType {
  name: string;
  url: string;
}
