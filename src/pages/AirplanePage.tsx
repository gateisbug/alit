import { useLocation } from "react-router-dom";
import {Fighter, Bomber, Attacker} from "resource/resource";
import Contents from "components/Contents";
import SubNav, {Links} from "components/SubNav";
import {useCallback} from "react";

const links:Links[] = [
	{ to:"/airplane/Fighter", title:"전투기" },
	{ to:"/airplane/Bomber", title:"폭격기" },
	{ to:"/airplane/Attacker", title:"뇌격기" },
]

export default function AirplanePage() {
	const { pathname } = useLocation();
	const makeContents = useCallback(() => {
		switch (pathname) {
			case "/airplane/Fighter": return <Contents items={Fighter} />;
			case "/airplane/Bomber": return <Contents items={Bomber} />;
			case "/airplane/Attacker": return <Contents items={Attacker} />;
			default: return <Contents items={Fighter.concat(Bomber, Attacker)} />;
		}
	}, [pathname])

	return (
		<div>
			<SubNav links={links} />
			{ makeContents() }
		</div>
	)
}