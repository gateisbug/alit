import { Cell, Sypo, Thead } from "@src/components/atoms";
import { CellSize } from "@src/defs/component";

type Props = {
	sizing: Array<CellSize>;
}

function ItemHead({ sizing }:Props) {
	return (
		<Thead>
			{
				sizing.map(v => (
					<Cell key={v.tip} flexBasis={v.flexBasis} flexGrow={v.flexGrow}>
						<Sypo type='p2' weight={700}>
							{v.tip}
						</Sypo>
					</Cell>
				))
			}
		</Thead>
	)
}

export default ItemHead;