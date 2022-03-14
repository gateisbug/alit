import { useLocation } from "react-router-dom";
import { DDGun, CLGun, CAGun, BBGun, CBGun } from "resource/resource";
import Contents from "components/Contents";
import SubNav, {Links} from "components/SubNav";
import {useCallback} from "react";

const links:Links[] = [
	{ to:"/main_gun/DDGun", title:"구축" },
	{ to:"/main_gun/CLGun", title:"경순" },
	{ to:"/main_gun/CAGun", title:"중순" },
	{ to:"/main_gun/BBGun", title:"전함" },
	{ to:"/main_gun/CBGun", title:"대형" },
]

export default function MainGunPage() {
	const { pathname } = useLocation();
	const makeContents = useCallback(() => {
		switch (pathname) {
			case "/main_gun/DDGun": return <Contents items={DDGun} />;
			case "/main_gun/CLGun": return <Contents items={CLGun} />;
			case "/main_gun/CAGun": return <Contents items={CAGun} />;
			case "/main_gun/BBGun": return <Contents items={BBGun} />;
			case "/main_gun/CBGun": return <Contents items={CBGun} />;
			default: return <Contents items={DDGun.concat(CLGun, CAGun, BBGun, CBGun)} />;
		}
	}, [pathname])

	return (
		<div>
			<SubNav links={links} />
			{ makeContents() }
		</div>
	)
}