import {IPokemonCard} from '../types/IPokemon';

export class PokemonMapper {

  public static mapOriginalList(pokemonList: any) {
    return {
      pokemonResults: pokemonList.results
    };
  }

  public static mapPokemonCard(pokemonDetails: any): IPokemonCard {
    return {
      name: pokemonDetails.name,
      img: pokemonDetails.sprites.front_default,
      id: pokemonDetails.id,
      types: pokemonDetails.types
    };

  }

}
