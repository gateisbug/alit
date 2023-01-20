import { Routes, Route } from "react-router-dom";
import { ItemPage, ErrorPage } from "@src/pages";
import { ROUTE_ERROR, ROUTE_MAIN_PAGE, ROUTE_ITEM_PAGE, ROUTE_ITEM_CATEGORY } from "@src/defs/routes";

function RootRouter() {
	return (
		<Routes>
			<Route path={ ROUTE_ITEM_PAGE } element={<ItemPage />} />
			<Route path={ ROUTE_ITEM_CATEGORY } element={<ItemPage />} />
			<Route path={ ROUTE_MAIN_PAGE } element={<ItemPage />} />
			<Route path={ROUTE_ERROR} element={<ErrorPage />} />
		</Routes>
	)
}

export default RootRouter;