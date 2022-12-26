import { useLocation, useNavigate } from "react-router-dom";

function useTransfer() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const path = (() => {
		const output = pathname.split('/');
		output.splice(0, 1);

		return output;
	})();

	const backward = (index:number) => {
		let url = '';

		if((path.length - 1) <= index) {
			// console.warn('This link cannot be reached.');
			return;
		}
		else {
			for (let i = 0; i < index+1; i++) {
				url += `/${path[i]}`;
			}

			navigate(url);
		}
	}

	const transfer = (index:number, link:string) => {
		let url = '';

		for (let i = 0; i < index; i++) {
			url += `/${path[i]}`;
		}
		url += `/${link}`;

		navigate(url);
	}

	return {
		backward,
		transfer
	}
}

export default useTransfer;