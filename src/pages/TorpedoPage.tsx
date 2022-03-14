import { useLocation } from "react-router-dom";
import { Torpedo, SubTorpedo } from "resource/resource";
import Contents from "components/Contents";
import SubNav, {Links} from "components/SubNav";
import {useCallback} from "react";

const links:Links[] = [
	{ to:"/torpedo/Torpedo", title:"수면어뢰" },
	{ to:"/torpedo/SubTorpedo", title:"잠수어뢰" },
]

export default function TorpedoPage() {
	const { pathname } = useLocation();
	const makeContents = useCallback(() => {
		switch (pathname) {
			case "/torpedo/Torpedo": return <Contents items={Torpedo} />;
			case "/torpedo/SubTorpedo": return <Contents items={SubTorpedo} />;
			default: return <Contents items={Torpedo.concat(SubTorpedo)} />;
		}
	}, [pathname])

	return (
		<div>
			<SubNav links={links} />
			{ makeContents() }
		</div>
	)
}