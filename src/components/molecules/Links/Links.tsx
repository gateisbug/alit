import classNames from "classnames/bind";
import styles from "./Links.module.scss";
import { Select } from "@src/components/atoms";

const cx = classNames.bind(styles);

function Links() {
	const links = [
		{ link: "https://arca.live/b/azurlane/45593816", icon: 'ResourceIcon' },
		{ link: "https://arca.live/b/azurlane", icon: 'ArcaLiveIcon' },
		{ link: "https://github.com/gateisbug/alit", icon: 'GithubIcon' },
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
						<img src={`/assets/${v.icon}.svg`} alt="icon" className={ cx("icon") }/>
					</Select>
				))
			}
		</div>
	)
}

export default Links;