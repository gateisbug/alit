import { useLocation } from "react-router-dom";
import {Auxiliary_AS, Auxiliary_BB, Auxiliary_CV, Auxiliary_FL, Auxiliary_RR, Auxiliary_SP} from "resource/resource";
import Contents from "components/Contents";
import SubNav, {Links} from "components/SubNav";
import {useCallback} from "react";

const links:Links[] = [
	{ to:"/auxiliary/BL", title:"후열" },
	{ to:"/auxiliary/FL", title:"전열" },
	{ to:"/auxiliary/AS", title:"대잠" },
	{ to:"/auxiliary/SP", title:"특수함" },
]

export default function AuxiliaryPage() {
	const { pathname } = useLocation();
	const makeContents = useCallback(() => {
		switch (pathname) {
			case "/auxiliary/BL": return <Contents items={Auxiliary_BB.concat(Auxiliary_CV)} />;
			case "/auxiliary/FL": return <Contents items={Auxiliary_RR.concat(Auxiliary_FL)} />;
			case "/auxiliary/AS": return <Contents items={Auxiliary_AS} />;
			case "/auxiliary/SP": return <Contents items={Auxiliary_SP} />;
			default: return <Contents items={Auxiliary_BB.concat(Auxiliary_CV, Auxiliary_RR, Auxiliary_FL, Auxiliary_AS, Auxiliary_SP)} />;
		}
	}, [pathname])

	return (
		<div>
			<SubNav links={links} />
			{ makeContents() }
		</div>
	)
}