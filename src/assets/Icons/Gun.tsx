import classNames from "classnames/bind";
import styels from "../assets.module.scss";

const cx = classNames.bind(styels);

function Gun() {
	return (
		<div className={ cx("assets") }>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
					<path d="M490 938 c-14 -5 -50 -9 -81 -9 -32 1 -79 -3 -105 -9 -65 -15 -184
							-70 -184 -86 0 -6 -19 -18 -42 -26 -50 -15 -59 -41 -32 -83 14 -22 23 -26 48
							-22 28 5 40 -3 116 -78 79 -78 90 -85 155 -103 69 -19 71 -19 125 0 68 23 83
							19 344 -91 104 -44 193 -78 198 -75 26 16 -10 41 -142 98 -170 73 -254 115
							-247 123 11 10 70 -11 319 -117 92 -38 171 -70 177 -70 6 0 11 8 11 19 0 14
							-28 31 -122 71 -137 59 -287 130 -273 130 16 0 97 -27 135 -43 19 -9 106 -46
							194 -83 127 -53 160 -64 167 -53 13 21 -4 32 -156 97 -77 34 -185 83 -240 110
							-95 47 -101 53 -129 105 -25 47 -37 59 -87 82 -56 27 -57 29 -52 61 5 31 3 35
							-30 49 -20 8 -38 15 -39 14 -2 0 -14 -5 -28 -11z"/>
				</g>
			</svg>
		</div>
	)
}

export default Gun;