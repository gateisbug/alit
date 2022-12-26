import { Routes, Route } from "react-router-dom";
import { ItemPage, ErrorPage } from "@src/pages";
import { ERROR_BOUNDARY, MAIN_PAGE_URL, ITEM_PAGE_INDEX_URL, ITEM_PAGE_CATEGORY_URL } from "@src/defs/routes";

function RootRouter() {
	return (
		<Routes>
			<Route path={ ITEM_PAGE_INDEX_URL } element={<ItemPage />} />
			<Route path={ ITEM_PAGE_CATEGORY_URL } element={<ItemPage />} />
			<Route path={ MAIN_PAGE_URL } element={<ItemPage />} />
			<Route path={ERROR_BOUNDARY} element={<ErrorPage />} />
		</Routes>
	)
}

export default RootRouter;