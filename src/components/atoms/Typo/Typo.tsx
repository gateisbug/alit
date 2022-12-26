import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Typo.module.scss";
import { TypoLine, TypoTypes, TypoWeight } from "@src/defs/types";

const cx = classNames.bind(styles);

type Props = {
	children:ReactNode;
	type?: TypoTypes;
	weight?: TypoWeight;
	line?: TypoLine;
	color?: string;
	ellipsis?: boolean;
	userSelect?: boolean;
	title?: string;
}

function Typo({
	children,
	type = 'p1',
	weight = undefined,
	line = 'S',
	color = 'inherit',
	ellipsis = false,
	userSelect = false,
	title = undefined
}:Props) {
	const style = (() => {
		const output:CSSProperties = {
			color,
			userSelect: userSelect ? 'auto':'none',
			fontWeight: 400,
		};

		if(ellipsis) {
			output.overflow = 'hidden';
			output.whiteSpace = 'nowrap';
			output.textOverflow = 'ellipsis';
		}

		if(weight !== undefined) {
			output.fontWeight = weight;
		}

		return output;
	})();

	return (
		<span className={ cx("Typo", line, type) }>
			{}
		</span>
	)
}