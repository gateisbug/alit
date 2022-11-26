import classNames from "classnames/bind";
import styles from "./ExternLink.module.scss";
import { Button } from "@src/components/atoms";
import Icon from "@src/assets";

const cx = classNames.bind(styles);
const { ResourceIcon, GithubIcon, ArcaLiveIcon } = Icon;

function ExternLink() {
	return (
		<div className={ cx("ExternLink") }>
			<Button.Select padding={"3px"}>
				<ResourceIcon size={28} />
			</Button.Select>
			<Button.Select padding={"3px"}>
				<GithubIcon size={28} />
			</Button.Select>
			<Button.Select padding={"3px"}>
				<ArcaLiveIcon size={28} />
			</Button.Select>
		</div>
	)
}

export default ExternLink;