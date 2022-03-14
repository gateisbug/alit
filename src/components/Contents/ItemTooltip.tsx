import { IItem } from "resource/interface";

interface Props {
	item: IItem;
}

export default function ItemTooltip({ item }:Props) {
	return (
		<div>
			<p className="title">{item.title}</p>
			{
				item.nickname.length > 0 &&
				<>
					<hr className="line"/>
					<p className="nickholder">
						{
							item.nickname.map((i, id) => <span key={id} className={"nickname"}>{i}</span>)
						}
					</p>
				</>
			}
			{
				!!item.comment &&
				<>
					<hr className="line"/>
					<p className="comment">{item.comment}</p>
				</>
			}
		</div>
	)
}