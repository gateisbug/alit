import classNames from "classnames/bind";
import styles from "./Portrait.module.scss";
import { Resource } from "@src/defs/resource";

const cx = classNames.bind(styles);

type Props = {
	datum: Resource;
	sz?: 'sx'|'mx'|'lx';
}

function Portrait({ sz='mx', datum }:Props) {
	const url = (() => {
		let output = '/res';

		switch (datum.class) {
			case '함포': output += '/gun'; break;
			case '어뢰': output += '/torpedo'; break;
			case '대공포': output += '/antiair'; break;
			case '함재기': output += '/airplane'; break;
			case '보조장비': output += '/accessory'; break;
			case '특수장비': output += '/special'; break;
		}

		output += `/${datum.index}.png`;

		return output;
	})();

	const stroke = (() => {
		if(datum.category.length === 0) {
			switch (datum.division) {
				case '일반': return 'gold';
				case '시한신관': return 'red';
				default: return 'grey';
			}
		}
		else {
			switch (datum.category) {
				case '통상탄': case '통상': return 'gold';
				case '고폭탄': return 'red';
				case '철갑탄': case '음향 유도': return 'blue';
				default: return 'grey';
			}
		}
	})();

	return (
		<div className={ cx("Portrait", sz, datum.tier, stroke) }
		     title={datum.name} >
			<img src={ url } alt={ datum.name } className={ cx("port") }/>
		</div>
	)
}

export default Portrait;