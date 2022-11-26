import { IconType } from "@src/defs/components";

function GithubIcon({ size=undefined, color="currentColor", fill="none" }:IconType) {
	return (
		<svg width={size||36} height={size||36} viewBox="0 0 36 36" fill={fill} xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_210_123)">
				<path fillRule="evenodd" clipRule="evenodd" d="M18 2C9.16 2 2 9.16 2 18C2 25.08 6.58 31.06 12.94 33.18C13.74 33.32 14.04 32.84 14.04 32.42C14.04 32.04 14.02 30.78 14.02 29.44C10 30.18 8.96 28.46 8.64 27.56C8.46 27.1 7.68 25.68 7 25.3C6.44 25 5.64 24.26 6.98 24.24C8.24 24.22 9.14 25.4 9.44 25.88C10.88 28.3 13.18 27.62 14.1 27.2C14.24 26.16 14.66 25.46 15.12 25.06C11.56 24.66 7.84 23.28 7.84 17.16C7.84 15.42 8.46 13.98 9.48 12.86C9.32 12.46 8.76 10.82 9.64 8.62C9.64 8.62 10.98 8.2 14.04 10.26C15.32 9.9 16.68 9.72 18.04 9.72C19.4 9.72 20.76 9.9 22.04 10.26C25.1 8.18 26.44 8.62 26.44 8.62C27.32 10.82 26.76 12.46 26.6 12.86C27.62 13.98 28.24 15.4 28.24 17.16C28.24 23.3 24.5 24.66 20.94 25.06C21.52 25.56 22.02 26.52 22.02 28.02C22.02 30.16 22 31.88 22 32.42C22 32.84 22.3 33.34 23.1 33.18C26.2763 32.1077 29.0363 30.0664 30.9917 27.3432C32.947 24.6201 33.9991 21.3524 34 18C34 9.16 26.84 2 18 2Z" fill={color}/>
			</g>
			<defs>
				<clipPath id="clip0_210_123">
					<rect width="32" height="32" fill="white" transform="translate(2 2)"/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default GithubIcon;