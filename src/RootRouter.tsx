import { Route, Routes } from "react-router-dom";
import { ItemPage, MainPage, NotFoundPage } from "./pages";

function RootRouter() {
	return (
		<Routes>
			<Route path="/item" element={<ItemPage />} />
			<Route path="/item/:category" element={<ItemPage />} />
			<Route path="/" element={<MainPage />} />
			<Route path="/*" element={<NotFoundPage />} />
		</Routes>
	)
}

export default RootRouter;