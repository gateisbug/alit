import { IconType } from "@src/defs/component";

function TorpedoIcon({ size=undefined, color="currentColor", fill="none" }:IconType) {
	return (
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
		     width={size||128} height={size||128} viewBox="0 0 128.000000 128.000000"
		     preserveAspectRatio="xMidYMid meet">

			<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
			   fill={color} stroke="none">
				<path d="M457 1210 c-15 -12 -27 -31 -27 -42 0 -20 -1 -20 -20 -3 -26 24 -66
						13 -89 -26 -11 -18 -22 -26 -25 -20 -20 31 -96 -4 -96 -44 0 -24 0 -24 -29 -7
						-29 16 -31 16 -58 -4 -36 -27 -42 -73 -14 -112 15 -22 22 -56 30 -144 13 -154
						51 -248 156 -392 99 -136 124 -162 167 -174 33 -9 92 -4 128 12 12 5 30 -14
						69 -69 29 -42 62 -84 74 -95 30 -29 73 -25 107 9 21 21 36 27 54 24 19 -4 33
						3 55 24 23 23 36 29 60 25 24 -3 37 2 59 24 21 21 36 28 58 26 19 -2 40 5 57
						18 43 34 37 73 -28 168 -50 74 -55 86 -55 136 0 30 5 58 10 61 7 4 7 11 2 18
						-11 14 -32 98 -32 127 0 13 -46 72 -117 151 -102 113 -128 135 -198 173 -44
						24 -103 51 -131 60 -39 13 -57 26 -75 54 -29 44 -56 50 -92 22z"/>
			</g>
		</svg>
	)
}

export default TorpedoIcon;