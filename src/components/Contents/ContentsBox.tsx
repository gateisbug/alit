import { IItem } from "resource/interface";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ContentsItem from "./ContentsItem";

interface Props {
	title: string;
	items?: IItem[];
}

const cx = classNames.bind(styles);

export default function ContentsBox({ title, items }:Props) {
	return (
		<div className={cx("Contents-box")}>
			<div className={cx("box-title")}>{title}</div>
			<hr className={cx("box-hr")}/>
			<article className={cx("box-contents")}>
				{
					items?.map((item, idx) => {
						return <ContentsItem key={idx} item={item} />;
					})
				}
			</article>
		</div>
	)
}