import { PokemonMapper } from './pokemon-mapper';
import { MOCK20POKEMONRESULT } from '../../mockup-pokemon-results';

const mockPokemonList = MOCK20POKEMONRESULT;

describe('PokemonMapper', () => {
    it('should create an instance', () => {
        expect(new PokemonMapper()).toBeTruthy();
    });

    describe('When the api results comes in', () => {
        it('It should correctly map the name correctly', () => {
            expect(PokemonMapper.mapOriginalList(mockPokemonList).pokemonResults[0].name).toBe('bulbasaur');
        });
    });

});
