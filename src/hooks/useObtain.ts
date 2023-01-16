import { TObtain } from "@src/defs/types";

function useObtain(obtains:Array<string>) {
	const obtain = () => {
		const output = obtains.map((v, i) => {
			const split = v.split("\t");

			if(split.length === 0) {
				return { gain: '-', detail: '' }
			}
			else if(split.length === 1) {
				return { gain: split[0], detail: '', }
			}
			else {
				let gain = split[0];
				let detail = '';

				for (let j = 0; j < split.length; j++) {
					detail += split[j];

					if(i !== split.length - 1) {
						detail += ', ';
					}
				}

				return { gain, detail }
			}
		});

		return output;
	}


}

export default useObtain;