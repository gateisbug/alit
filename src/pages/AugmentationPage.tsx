import {Augmentation} from "resource/resource";
import Contents from "components/Contents";

export default function AugmentationPage() {
	// const { pathname } = useLocation();
	// const makeContents = useCallback(() => {
	// 	switch (pathname) {
	// 		// case "/auxiliary/BL": return <Contents items={Auxiliary_BB.concat(Auxiliary_CV)} />;
	// 		// case "/auxiliary/FL": return <Contents items={Auxiliary_RR.concat(Auxiliary_FL)} />;
	// 		// case "/auxiliary/AS": return <Contents items={Auxiliary_AS} />;
	// 		// case "/auxiliary/SP": return <Contents items={Auxiliary_SP} />;
	// 		default: return <Contents items={Augmentation.concat(Auxiliary_CV, Auxiliary_RR, Auxiliary_FL, Auxiliary_AS, Auxiliary_SP)} />;
	// 	}
	// }, [pathname])

	return (
		<div>
			<Contents items={Augmentation} />;
		</div>
	)
}