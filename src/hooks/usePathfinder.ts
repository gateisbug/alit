import { ITEM_PAGE_CATEGORY_URL } from "@src/defs/routes";

function usePathfinder() {
	const convertUrl = (url:string, id:string) => {
		if(url === ITEM_PAGE_CATEGORY_URL) {
			return ITEM_PAGE_CATEGORY_URL.replace('/*', `/${id}`);
		}
		else {
			return url;
		}
	}

	return {
		convertUrl,
	}
}

export default usePathfinder;