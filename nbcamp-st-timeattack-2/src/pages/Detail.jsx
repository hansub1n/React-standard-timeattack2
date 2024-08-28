import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../MOCK";

const Detail = () => {
	const navigate = useNavigate();
	const [searchParams, setSearhParams] = useSearchParams();
	const pokemmonId = searchParams.get("id");
	const pokemonData = MOCK_DATA;

	const pokemonDetail = (id) => {
		return pokemonData.find((pokemon) => pokemon.id === Number(id));
	};

	const { img_url, korean_name, types, description } =
		pokemonDetail(pokemmonId);

	return (
		<div>
			<div>
				<img src={img_url} />
				<p>{korean_name}</p>
				<p>{types.join(", ")}</p>
				<p>{description}</p>
				<button onClick={() => navigate(-1)}>뒤로가기</button>
			</div>
		</div>
	);
};

export default Detail;
