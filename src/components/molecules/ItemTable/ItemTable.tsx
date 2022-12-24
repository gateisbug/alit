import { Table } from "@src/components/atoms";
import { CellSize } from "@src/defs/component";
import useResource from "@src/hooks/useResource";
import ItemHead from "./ItemHead";
import ItemBody from "./ItemBody";

function ItemTable() {
	const data = useResource();

	const cellSize:Array<CellSize> = [
		{ tip:'아이콘', flexBasis:'100px', flexGrow: undefined, align: undefined },
		{ tip:'장비명', flexBasis:'210px', flexGrow: undefined, align: undefined },
		{ tip:'대분류', flexBasis:'100px', flexGrow: undefined, align: undefined },
		{ tip:'소분류', flexBasis:'100px', flexGrow: undefined, align: undefined },
		{ tip:'속성', flexBasis:'100px', flexGrow: undefined, align: undefined },
		{ tip:'획득처', flexBasis:'100px', flexGrow: undefined, align: undefined },
		{ tip:'별칭', flexBasis:'120px', flexGrow: undefined, align: undefined },
		{ tip:'사용성', flexBasis:'240px', flexGrow: 1, align: 'left' },
	];

	return (
		<Table>
			<ItemHead sizing={cellSize} />
			{
				data.map((v, i) => (
					<ItemBody key={i} sizing={cellSize} datum={v} />
				))
			}
		</Table>
	)
}

export default ItemTable;