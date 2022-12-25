import { IconType } from "@src/defs/component";

function CloseIcon({ size=undefined, color="currentColor", fill="none" }:IconType) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={ size||48 } width={ size||48 } fill={fill}>
			<path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" fill={color}/>
		</svg>
	)
}

export default CloseIcon;