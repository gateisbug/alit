import {Route, Routes} from "react-router-dom";
import {AAGun} from "resource/resource";
import HomeContents from "components/HomeContents/Home";
import MainGunPage from "pages/MainGunPage";
import TorpedoPage from "pages/TorpedoPage";
import Contents from "components/Contents";
import AirplanePage from "pages/AirplanePage";
import AuxiliaryPage from "pages/AuxiliaryPage";

export default function RootRouter() {
	return (
		<Routes>
			{/*<Route path="/alit" element={<HomeContents />} />*/}
			<Route path="/main_gun/*" element={<MainGunPage />} />
			<Route path="/torpedo/*" element={<TorpedoPage />} />
			<Route path="/aa_gun/*" element={<Contents items={ AAGun } />} />
			<Route path="/airplane/*" element={<AirplanePage />} />
			<Route path="/auxiliary/*" element={<AuxiliaryPage />} />
			<Route path="/" element={<HomeContents />} />
		</Routes>
	)
}