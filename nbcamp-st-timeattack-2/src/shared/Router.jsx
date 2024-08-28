import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Dex from "../pages/Dex";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dex" element={<Dex />} />
				<Route path="/pokemon-detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
