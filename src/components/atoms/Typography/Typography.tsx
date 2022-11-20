import classNames from "classnames/bind";
import styles from "./Typography.module.scss";
import React from "react";

const cx = classNames.bind(styles);

type Props = {
	t: "title" | "h1" | "h2" | "h3" | "body1" | "body2" | "subtext";
	children: string;
	ellipsis?: boolean;
	justify?: "left"|"right"|"center";
}

function Typography({ t, children, ellipsis=false, justify="left" }:Props) {
	const style = (() => {
		if(ellipsis) {
			return {
				overflow: "hidden",
				textOverflow: "ellipsis",
				whiteSpace: "nowrap"
			} as React.CSSProperties;
		}
		else {
			return undefined;
		}
	})();

	return (
		<div className={ cx("Typo", t, justify) } style={style}>
			{ children }
		</div>
	)
}

export default Typography;