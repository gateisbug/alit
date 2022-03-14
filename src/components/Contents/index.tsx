import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { IItem } from "resource/interface";
import ContentsBox from "./ContentsBox";
import {useEffect, useState} from "react";

interface Props {
	items: IItem[];
}

const cx = classNames.bind(styles);

export default function Contents({ items }:Props) {
	const [flagShips, setFlagShips] = useState<IItem[]>([]);
	const [mainStreams, setMainStreams] = useState<IItem[]>([]);
	const [lowEnds, setLowEnds] = useState<IItem[]>([]);

	useEffect(() => {
		setFlagShips(items.filter(item => (item.division === "EndSpec") ))
		setMainStreams(items.filter(item => (item.division === "Mainstream") ))
		setLowEnds(items.filter(item => (item.division === "Lowend") ))
	}, [items])

	return (
		<div className={cx("Contents")}>
			<section className={cx("Contents-container")}>
				{
					flagShips.length > 0 && <ContentsBox title={"최종"} items={flagShips} />
				}
				{
					mainStreams.length > 0 && <ContentsBox title={"주류"} items={mainStreams} />
				}
				{
					lowEnds.length > 0 && <ContentsBox title={"비주류"} items={lowEnds} />
				}
			</section>
		</div>
	)
}