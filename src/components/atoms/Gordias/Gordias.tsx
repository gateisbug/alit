import classNames from "classnames/bind";
import styles from "./Gordias.module.scss";
import { Sypo } from "@src/components/atoms";

const cx = classNames.bind(styles);

type Props = {
	strings: Array<string>;
	seperator?: string;
}

function Gordias({ strings, seperator="\t" }:Props) {
	const splice = (string:string) => {
		const split = string.split(seperator);

		if(split.length === 0) {
			return (
				<Sypo type='p2'>-</Sypo>
			)
		}
		else if(split.length === 1) {
			return (
				<div className={ cx("single") }>{split[0]}</div>
			);
		}
		else {
			let head = split[0];
			let body = '';

			for (let i = 1; i < split.length; i++) {
				body += split[i];

				if(i !== split.length - 1) {
					body += ', ';
				}
			}

			return (
				<>
					<div className={ cx("head") } title={head}>{ head }</div>
					<div className={ cx("body") }>{ body }</div>
					{/*<Sypo type='p2' weight={400}>{ body }</Sypo>*/}
				</>
			)
		}
	}


	return (
		<div className={ cx("Gordias") }>
			{
				strings.map((v, i) => (
					<div className={ cx("splice") } key={i}>
						{ splice(v) }
					</div>
				))
			}
		</div>
	)
}

export default Gordias;