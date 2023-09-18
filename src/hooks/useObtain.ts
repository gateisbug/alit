const event_kor = [
	"상자깡", "메인", "장비개발", "군부연구실", "코어샵", "건조", "서브미션", "해역구조", "통상파괴",
	"빛과 그림자의 아이리스", "허상의 탑", "동절의 북해", "부흥의 찬송가", "결상점작전", "하늘 아래의 찬송가", "디바인 트레지 코미디",
	"비추는 나선의 경해", "짙은 자줏빛의 안개", "깊게 울리는 메아리", "맑고 푸른 바다", "거듭되는 평행세계", "아이리스의 천사",
	"빛나는 정원의 맹세", "영원한 밤의 환광", "작은 약속", "거울에 비친 이색", "접해몽화", "잿빛 폐허", "극지 폭풍",
	"어리석은 자의 천칭"
]

const event = [
	"Boxes", "Main", "Gear Lab", "Research", "Core Shop", "Build", "Mission", "Threat", "Daily",
	"Iris of Light and Dark", "Virtual Tower", "Nothern Overture", "Daedalian Hymn", "Operation Convergence", "Sky Bound Oratorio", "Empyreal Tregicomedy",
	"Mirror Involution", "Violet Tempest Blooming Lycoris", "Abyssal Refrain", "Upon the Shimmering Blue", "Parallel Superimposition", "Angel of the Iris",
	"Pledge of the Radiant Court", "Aurora Noctis", "One Small Promise", "Divergent Chessboard", "Dreamwalkers Butterfly", "Revelations of Dust", "Frostfall",
	"The Fools Scales Event Banner"
]

function useObtain(seperator="\t") {
	const getObtain = (obtains:Array<string>) => {
		return obtains.map((v) => {
			const split = v.split(seperator);

			if(split.length === 0) {
				return { gain: '-', detail: '' }
			}
			else if(split.length === 1) {
				return { gain: split[0], detail: '', }
			}
			else {
				let gain = split[0];
				let detail = '';

				for (let j = 1; j < split.length; j++) {
					detail += split[j];

					if(j < split.length - 1) {
						detail += ', ';
					}
				}

				return { gain, detail }
			}
		});
	}

	const getImage = (gain:string) => {
		const index = event_kor.findIndex(v => v === gain);

		if(index === -1) {
			return '#';
		}
		else if(index < 8) {
			return `resources/obtain/normal/${event[index]}.png`;
		}
		else {
			return `resources/obtain/events/${event[index]}.png`;
		}
	}

	return {
		getObtain, getImage
	}
}

export default useObtain;