export interface IPokemonCard {
  name: string;
  img: string;
  id: number;
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

export interface IPokemonResponse {
  name: string;
  url: string;
}
