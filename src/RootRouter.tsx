import { Routes, Route } from "react-router-dom";
import { MainPage, ItemPage, NFPage } from "@src/pages";

function RootRouter() {
	return (
		<Routes>
			<Route path="/item" element={<ItemPage />} />
			<Route path="/item:category" element={<ItemPage />} />
			<Route path="/" element={<MainPage />} />
			<Route path="/*" element={<NFPage />} />
		</Routes>
	)
}

export default RootRouter;