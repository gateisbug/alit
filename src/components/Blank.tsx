interface Props {
	link: string;
	children: any;
}

export default function Blank({ link, children }:Props) {
	return (
		<a href={link} target="_blank" rel="noreferrer">{children}</a>
	)
}