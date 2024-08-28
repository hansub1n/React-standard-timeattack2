import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, addPokemon, removePokemon, isSelected }) => {
	const navigate = useNavigate();
	const { id, img_url, korean_name } = pokemon;

	return (
		<div>
			<div onClick={() => navigate(`/pokemon-detail?id=${id}`)}>
				<img src={img_url} />
				<p>{korean_name}</p>
				<p>No.{id}</p>
			</div>
			<div>
				{isSelected ? (
					<button onClick={() => removePokemon(pokemon)}>삭제</button>
				) : (
					<button onClick={() => addPokemon(pokemon)}>추가</button>
				)}
			</div>
		</div>
	);
};

export default PokemonCard;
