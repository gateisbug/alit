import classNames from "classnames/bind";
import styles from "./ExternLinks.module.scss";
import { Iconic } from "@src/components/atoms";
import { ArcaLiveIcon, ResourceIcon, GithubIcon } from "@src/assets";

const cx = classNames.bind(styles);

function ExternLinks() {
	const onClickResource = () => {
		window.open("https://arca.live/b/azurlane/45593816");
	}

	const onClickArcaLive = () => {
		window.open("https://arca.live/b/azurlane");
	}

	const onClickGithub = () => {
		window.open("https://github.com/gateisbug/alit");
	}

	return (
		<div className={ cx("ExternLinks") }>
			<Iconic element={<ResourceIcon />} onClick={onClickResource} />
			<Iconic element={<ArcaLiveIcon />} onClick={onClickArcaLive} />
			<Iconic element={<GithubIcon />} onClick={onClickGithub} />
		</div>
	)
}

export default ExternLinks;