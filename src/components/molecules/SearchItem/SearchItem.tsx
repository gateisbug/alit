import { SearchBar } from "@src/components/atoms";

function SearchItem() {
	const onSearchKeyword = (value:string) => {
		console.log(value);
	}

	return (
		<SearchBar onSearch={onSearchKeyword} />
	)
}

export default SearchItem;