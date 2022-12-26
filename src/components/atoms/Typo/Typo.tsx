import { CSSProperties, ReactNode } from "react";
import { TypoLine, TypoTypes, TypoWeight } from "@src/defs/types";
import classNames from "classnames/bind";
import styles from "./Typo.module.scss";

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
		<span className={ cx("Typo", line, type) } title={title} style={style}>
			{ children }
		</span>
	)
}

function Sypo(props:Props) {
	const {
		children,
		type = 'p1',
		weight = undefined,
		color = 'inherit',
		ellipsis = false,
		userSelect = false,
		title = undefined
	} = props

	return <Typo children={children}
	             type={type}
	             weight={weight}
	             line={'S'}
	             color={color}
	             ellipsis={ellipsis}
	             userSelect={userSelect}
	             title={title} />
}

function Mypo(props:Props) {
	const {
		children,
		type = 'p1',
		weight = undefined,
		color = 'inherit',
		ellipsis = false,
		userSelect = false,
		title = undefined
	} = props

	return <Typo children={children}
	             type={type}
	             weight={weight}
	             line={'M'}
	             color={color}
	             ellipsis={ellipsis}
	             userSelect={userSelect}
	             title={title} />
}

export { Typo, Sypo, Mypo };