import classNames from "classnames/bind";
import styels from "../assets.module.scss";

const cx = classNames.bind(styels);

function Torpedo() {
	return (
		<div className={ cx("assets") }>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
					<path d="M456 1209 c-14 -11 -26 -30 -26 -41 0 -20 -1 -20 -20 -3 -26 24 -66
							13 -89 -26 -11 -18 -22 -26 -25 -20 -20 31 -96 -4 -96 -44 0 -24 0 -24 -29 -7
							-29 16 -31 16 -58 -4 -36 -27 -42 -73 -14 -112 15 -22 22 -56 30 -144 13 -154
							51 -248 156 -392 99 -136 124 -162 167 -174 33 -9 92 -4 128 12 12 5 30 -14
							69 -69 29 -42 62 -84 74 -95 30 -29 73 -25 107 9 21 21 36 27 54 24 19 -4 33
							3 55 24 23 23 36 29 60 25 24 -3 37 2 59 24 21 21 36 28 58 26 19 -2 40 5 57
							18 43 34 37 73 -28 168 -50 74 -55 86 -55 136 0 30 5 58 10 61 7 4 7 11 2 18
							-11 14 -32 98 -32 127 0 13 -46 72 -117 151 -102 113 -128 135 -198 173 -44
							24 -104 51 -133 60 -38 13 -56 25 -67 47 -14 27 -42 49 -63 49 -5 0 -21 -9
							-36 -21z"/>
				</g>
			</svg>
		</div>
	)
}

export default Torpedo;