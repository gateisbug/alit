import classNames from "classnames/bind";
import styles from "./Horizon.module.scss";
import { Evental } from "@src/defs/component";
import { Sypo } from "@src/components/atoms";

const cx = classNames.bind(styles);

type Props = {
	type: 'text'|'img';
	gain: Array<string>;
}

function Horizon({ type, gain }:Props) {
	if(type === 'text') {
		const getEvent = () => {
			if(gain.length === 0) {
				return '-';
			}
			else {
				let output = '';
				const _gain = gain[0].split('\t');
				switch (_gain[0]) {
					case '상자깡': output += '상자'; break;
					case '메인': output += '메인'; break;
					case '장비개발': output += '장비개발'; break;
					case '군부연구실': output += '연구실'; break;
					case '코어샵': output += '코어샵'; break;
					case '건조': output += '건조'; break;
					default: output += '이벤트'; break;
				}

				const length = (_gain.length > 1) ? ` 외 ${_gain.length - 1}`:'';
				// output
				return output + length;
			}
		}

		return  (
			<Sypo type='p2' weight={400}>
				{ getEvent() }
			</Sypo>
		)
	}
	else {
		const getEvent = () => {
			//
		}

		return (
			<div className={ cx("Horizon") }>
			</div>
		)
	}
}

export default Horizon;