import classNames from "classnames/bind";
import styles from "./Links.module.scss";
import { ArcaLiveIcon, GithubIcon, ResourceIcon } from "@src/assets";
import { Button } from "@src/components/atoms";

const cx = classNames.bind(styles);

function Links() {
	const links = [
		{ link: "https://arca.live/b/azurlane/45593816", icon: <ResourceIcon size={20} /> },
		{ link: "https://arca.live/b/azurlane", icon: <ArcaLiveIcon size={20} /> },
		{ link: "https://github.com/gateisbug/alit", icon: <GithubIcon size={20} /> },
	]

	const onClickButton = (link:string) => {
		window.open(link)
	}

	return (
		<div className={ cx("Links") }>
			{
				links.map((v, i) => (
					<Button.Select key={i}
					               onClick={() => onClickButton(v.link)}
					               colorSet="dark">
						{ v.icon }
					</Button.Select>
				))
			}
		</div>
	)
}

export default Links;