import classNames from "classnames/bind";
import styles from "./Portrait.module.scss";
import { Resource, Size } from "@src/defs/types";

const cx = classNames.bind(styles);

type Props = {
	resource: Resource;
	size?: Size;
}

function Portrait({ resource, size='sx' }:Props) {
	const src:string = (() => {
		let output = '/resources';

		switch (resource.class) {
			case '함포': output += '/gun'; break;
			case '어뢰': output += '/torpedo'; break;
			case '대공포': output += '/antiair'; break;
			case '함재기': output += '/airplane'; break;
			case '보조장비': output += '/accessory'; break;
			case '특수장비': output += '/special'; break;
		}
		output += `/${resource.index}.png`;
		return output;
	})();

	const stroke = (() => {
		if(resource.category.length === 0) {
			switch (resource.division) {
				case '일반': return 'gold';
				case '시한신관': return 'red';
				default: return 'grey';
			}
		}
		else {
			switch (resource.category) {
				case '통상탄': case '통상': case '범용': return 'gold';
				case '고폭탄': case '전폭기': return 'red';
				case '철갑탄': case '음향 유도': case '보스용': case '방공용': return 'blue';
				default: return 'grey';
			}
		}
	})();

	return (
		<div className={ cx("Portrait", size, resource.tier, stroke) }>
			<img src={src} alt="Portrait" className={ cx("icon") }/>
		</div>
	)
}

export default Portrait;