import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import Icon from "@src/assets";

const cx = classNames.bind(styles);
const { SearchIcon } = Icon;

function Search() {
	return (
		<div className={ cx("Search") }>
			<div className={ cx("container") }>
				<input type="text" className={ cx("input") } placeholder="Please input search text here..."/>
				<div className={ cx("icon") }>
					<SearchIcon />
				</div>
			</div>
		</div>
	)
}

export default Search;