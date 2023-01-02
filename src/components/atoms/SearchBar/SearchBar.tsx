import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Deco } from "@src/assets";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import { useResponsive } from "@src/hooks";

const inputId = `_ailt_input_text`;
const cx = classNames.bind(styles);

type Props = {
	onSearch: (value:string) => void;
	defaultValue?: string;
	colorSet?: 'dark'|'light';
}

function SearchBar({ onSearch, defaultValue, colorSet='dark' }:Props) {
	const { sizeIs } = useResponsive();

	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');

	const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	const onClickSearch = () => {
		onSearch(value);

		if(!inputRef || !inputRef.current) return;
		inputRef.current.blur();
	}

	const onFocus = () => {
		if(!inputRef || !inputRef.current) return;
		inputRef.current.classList.add('focus');
	}

	const onBlur = () => {
		if(!inputRef || !inputRef.current) return;
		inputRef.current.classList.remove('focus');
	}

	const placeholder = (() => {
		switch (sizeIs) {
			case "desktop": case "laptop": return 'Please search keyword here';
			case "tablet": case "mobile": return 'Search';
		}
	})();

	useEffect(() => {
		if(!defaultValue) return;
		setValue(defaultValue);
	}, [defaultValue]);

	useEffect(() => {
		const handler = (e:KeyboardEvent) => {
			const input = document.getElementById(inputId);
			if(!input) return;

			const { key } = e;
			const isFocus = input.classList.contains('focus');

			if(isFocus && key === 'Enter') {
				onClickSearch();
			}
		}

		document.addEventListener('keyup', handler);
		return () => {
			document.removeEventListener('keyup', handler);
		}
	}, [onClickSearch]);

	return (
		<div className={ cx("SearchBar", colorSet) }>
			<input type="text"
			       ref={inputRef}
			       id={inputId}
			       className={ cx("search-input") }
			       placeholder={placeholder}
			       onChange={onChangeInput}
			       onFocus={onFocus}
			       onBlur={onBlur} />
			<div className={ cx("Icon") }
			     onClick={onClickSearch}>
				<div className={ cx("searchIcon") }>
					<Deco.Search />
				</div>
			</div>
		</div>
	)
}

export default SearchBar;