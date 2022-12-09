import { ChangeEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { SearchIcon } from "@src/assets";

const inputId = '_alil_input_text';
const cx = classNames.bind(styles);

type Props = {
	onSearch: (value:string) => void;
	defaultValue?: string;
	colorSet?: "dark";
}

function SearchBar({ onSearch, defaultValue, colorSet="dark" }:Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');

	const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
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

	useEffect(() => {
		if(!defaultValue) return;
		setValue(defaultValue);
	}, [defaultValue])

	useEffect(() => {
		const handler = (e:KeyboardEvent) => {
			const input = document.getElementById(inputId);
			if(!input) return;

			const { key } = e;
			const isFocus = input.classList.contains('focus');

			// Enter
			if(isFocus && key === 'Enter') {
				onClickSearch()
			}
		}

		document.addEventListener('keyup', handler);
		return () => document.removeEventListener('keyup', handler);
	}, [onClickSearch])

	return (
		<div className={ cx("SearchBar", colorSet) }>
			<input type="text"
			       ref={inputRef}
			       id={inputId}
			       className={ cx("search-input") }
			       placeholder={"Please search keyword here"}
			       onChange={onChangeInput}
			       onFocus={onFocus}
			       onBlur={onBlur}
			/>
			<div className={ cx("Icon") }
			     onClick={onClickSearch}>
				<SearchIcon size={20} color={"#66b2ff"} />
			</div>
		</div>
	)
}

export default SearchBar;