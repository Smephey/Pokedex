import { IPokemonCard } from '../types/IPokemon';

export class PokemonMapper {

    public static mapOriginalList(pokemonList: any) {
        return {
            pokemonResults: pokemonList.results
        };
    }

    public static mapPokemonCard(pokemonDetails: any): IPokemonCard {
        return {
            name: this.mapPokemonName(pokemonDetails.name),
            img: pokemonDetails.sprites.front_default,
            id: pokemonDetails.id,
            types: pokemonDetails.types,
            gender: this.mapPokemonGender(pokemonDetails.name)
        };
    }

    public static mapPokemonGender(pokemonName: string): string {
        return this.getGender(pokemonName);
    }

    public static mapPokemonName(pokemonName: string): string {
        const gender = this.getGender(pokemonName);

        if (gender === 'female') {
            return pokemonName.slice(0, -2);
        } else if (gender === 'male') {
            return pokemonName.slice(0, -2);
        }

        return pokemonName;
    }

    private static getGender(pokemonName: string): string {
        if (pokemonName.slice(-2) === '-f') {
            return 'female';
        } else if (pokemonName.slice(-2) === '-m') {
            return 'male';
        }
        return null;
    }

}
