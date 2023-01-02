import classNames from "classnames/bind";
import styels from "../assets.module.scss";

const cx = classNames.bind(styels);

function Special() {
	return (
		<div className={ cx("assets") }>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
					<path d="M95 1070 l-49 -50 65 -61 c35 -34 94 -88 131 -121 37 -33 74 -71 83
							-84 15 -24 15 -26 -9 -55 -43 -50 -7 -82 41 -37 l23 22 66 -65 65 -64 -130
							-125 -130 -125 -20 -75 c-12 -41 -21 -76 -21 -79 0 -8 113 10 148 24 20 9 90
							69 158 137 l123 121 130 -124 c136 -128 163 -145 254 -156 l48 -6 -7 29 c-29
							128 -28 126 -166 256 l-130 123 67 63 67 64 22 -21 c48 -45 82 -10 41 43 l-24
							32 97 97 c54 53 100 97 104 97 8 0 88 81 88 89 0 9 -94 101 -103 101 -4 0 -60
							-53 -124 -118 -65 -65 -131 -127 -146 -137 -28 -18 -28 -18 -57 10 -24 23 -32
							26 -45 15 -20 -17 -19 -29 4 -54 19 -21 19 -21 -13 -56 -18 -19 -50 -51 -70
							-70 l-36 -34 -70 69 -70 69 20 21 c44 47 9 80 -40 39 -26 -22 -33 -24 -48 -13
							-15 11 -159 149 -242 232 -16 15 -32 27 -37 27 -5 0 -31 -22 -58 -50z"/>
				</g>
			</svg>
		</div>
	)
}

export default Special;