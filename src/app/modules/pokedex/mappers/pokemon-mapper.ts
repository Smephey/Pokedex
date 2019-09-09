export class PokemonMapper {

    public static mapOriginalList(pokemonList: any) {
        return {
            pokemonResults: pokemonList.results
        };
    }

}
