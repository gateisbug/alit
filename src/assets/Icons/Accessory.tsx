import classNames from "classnames/bind";
import styels from "../assets.module.scss";

const cx = classNames.bind(styels);

function Accessory() {
	return (
		<div className={ cx("assets") }>
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet">
				<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill='currentColor' stroke="none">
					<path d="M286 1101 c-9 -10 -21 -35 -27 -54 -6 -24 -14 -34 -23 -31 -19 7 -96 -32 -121 -61 -11 -13 -29 -25 -39 -27 -29 -5 -42 -32 -30 -65 11 -32 46 -42 72 -21 24 19 73 16 86 -4 14 -23 -12 -72 -73 -141 l-45 -49 36 -180 c20 -99 40 -184 45 -189 4 -4 160 -44 346 -89 l337 -82 88 48 c244 132 261 143 266 177 2 18 12 93 21 167 15 127 15 136 -2 147 -9 7 -24 13 -34 13 -23 0 -32 14 -59 90 -59 169 -59 168 -96 180 -26 9 -39 9 -47 1 -21 -21 -29 -11 -25 31 4 57 -22 64 -61 17 l-28 -33 -229 52 c-183 42 -232 56 -243 73 -12 17 -70 49 -91 49 -4 0 -15 -8 -24 -19z m379 -191 c94 -23 175 -43 182 -45 14 -5 -24 -115 -40 -115 -12 0 -130 31 -214 57 -47 14 -52 18 -58 51 -4 21 -21 50 -40 69 -20 20 -27 32 -17 29 9 -3 94 -24 187 -46z m265 -69 c0 -5 -5 -32 -12 -60 -10 -43 -15 -51 -34 -51 -13 0 -25 3 -27 8 -9 14 42 112 57 112 9 0 16 -4 16 -9z"/>
				</g>
			</svg>
		</div>
	)
}

export default Accessory;