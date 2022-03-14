import { useCallback } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { tier } from "resource/interface";

interface Props {
	link:string;
	tier:tier;
}

const cx = classNames.bind(styles);

export default function Icon({ link, tier }:Props) {
	const tierClass = useCallback(() => {
		switch (tier) {
			case "UR": return "ultra-rare";
			case "SSR": return "superior-super-rare";
			case "SR": return "super-rare";
			case "R": return "rare";
			default: return "";
		}
	}, [tier])

	return (
		<div className={cx("Icon-container", tierClass())} >
			<img src={link} alt={"item icon"} className={cx('Icon-image')} />
		</div>
	)
}