import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ PokemonData, addPokemon }) => {
	return (
		<StPokemonList>
			{PokemonData.map((pokemon) => {
				return (
					<div key={pokemon.id}>
						<PokemonCard
							pokemon={pokemon}
							addPokemon={addPokemon}
							isSelected={false}
						/>
					</div>
				);
			})}
		</StPokemonList>
	);
};

export default PokemonList;

const StPokemonList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
