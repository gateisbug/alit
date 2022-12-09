import { CSSProperties, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Typo.module.scss";
import { TypoLine, TypoType, TypoWeight } from "@src/defs/component";

const cx = classNames.bind(styles);

type Props = {
	children:ReactNode;
	type: TypoType,
	line: TypoLine,
	weight?: TypoWeight,
	color?: string,
	ellipsis?: boolean;
}

function Typo({ children, type, line, weight, color=undefined, ellipsis=false }:Props) {
	const styles = (() => {
		const output:CSSProperties = {
			color: 'inherit'
		};

		switch (weight) {
			case "b": case "bold": case 700:
				output.fontWeight = 700;
				break;
			case 'm': case 'medium': case 500:
				output.fontWeight = 500;
				break;
			case 'r': case 'regular': case 400:
				output.fontWeight = 400;
				break;
			default:
				output.fontWeight = undefined;
		}

		if(color !== undefined) {
			output.color = color;
		}

		return output;
	})();

	return (
		<span className={ cx("Typo", type, line, ellipsis && 'ellipsis') }
		      style={styles}>
			{ children }
		</span>
	)
}

type Trops = {
	children: ReactNode;
	type: TypoType;
	weight?: TypoWeight;
	color?: string;
	ellipsis?: boolean;
}
function Sypo({ children, type, weight, color, ellipsis=false }:Trops) {
	return (
		<Typo type={type}
		      line={'single'}
		      weight={weight}
		      color={color}
		      ellipsis={ellipsis}>
			{ children }
		</Typo>
	)
}

function Mypo({ children, type, weight, color, ellipsis=false }:Trops) {
	return (
		<Typo type={type}
		      line={'multi'}
		      weight={weight}
		      color={color}
		      ellipsis={ellipsis}>
			{ children }
		</Typo>
	)
}

export {
	Typo, Sypo, Mypo
}