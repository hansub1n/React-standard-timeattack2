import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const Dashboard = ({ selectedPokemons, removePokemon }) => {
	if (selectedPokemons.length === 0) {
		return (
			<div>
				<h1>나만의 포켓몬</h1>
				<p>선택된 포켓몬이 없습니다.</p>
			</div>
		);
	} else {
		return (
			<div>
				<h1>나만의 포켓몬</h1>
				<StDashboard>
					{selectedPokemons.map((pokemon) => {
						return (
							<div key={pokemon.id}>
								<PokemonCard
									pokemon={pokemon}
									removePokemon={removePokemon}
									isSelected={true}
								/>
							</div>
						);
					})}
				</StDashboard>
			</div>
		);
	}
};

export default Dashboard;
const StDashboard = styled.div`
	display: flex;
	flex-direction: row;
`;
