import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MOCK";

const Dex = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([]);

	const addPokemon = (pokemon) => {
		const existedPokemon = (targetPokemon) => {
			return selectedPokemons.find(
				(pokemon) => pokemon.korean_name === targetPokemon.korean_name
			);
		};

		if (existedPokemon(pokemon)) {
			alert("이미 존재하는 포켓몬입니다.");
			return;
		}

		if (selectedPokemons.length >= 6) {
			alert("포켓몬은 최대 여섯개까지만 선택 가능합니다.");
			return;
		}

		const newPokemonList = [...selectedPokemons, pokemon];
		setSelectedPokemons(newPokemonList);
		console.log(newPokemonList);
	};

	const removePokemon = (pokemon) => {
		setSelectedPokemons(
			selectedPokemons.filter((targetPokemon) => {
				return targetPokemon.id !== pokemon.id;
			})
		);
	};

	return (
		<div>
			<Dashboard
				selectedPokemons={selectedPokemons}
				removePokemon={removePokemon}
			/>
			<PokemonList PokemonData={MOCK_DATA} addPokemon={addPokemon} />
		</div>
	);
};

export default Dex;
