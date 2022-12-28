import classNames from "classnames/bind";
import styles from "./Links.module.scss";
import { Deco } from "@src/assets";
import { Select } from "@src/components/atoms";

const cx = classNames.bind(styles);

function Links() {
	const links = [
		{ link: "https://arca.live/b/azurlane/45593816", icon: <Deco.Resource /> },
		{ link: "https://arca.live/b/azurlane", icon: <Deco.ArcaLive /> },
		{ link: "https://github.com/gateisbug/alit", icon: <Deco.Github /> },
	];

	const onClickButton = (link:string) => {
		window.open(link);
	}

	return (
		<div className={ cx("Links") }>
			{
				links.map((v, i) => (
					<Select key={i}
					        onClick={_ => onClickButton(v.link)}
					        colorSet='dark' padding={5}>
						<div className={ cx("icon-box") }>
							{ v.icon }
						</div>
					</Select>
				))
			}
		</div>
	)
}

export default Links;