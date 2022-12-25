import { Cell, Horizon, Portrait, Sypo, Tbody } from "@src/components/atoms";
import { CellSize } from "@src/defs/component";
import { Resource } from "@src/defs/resource";
import { useSetRecoilState } from "recoil";
import { itemDetailAtom, modalAtom, setModalSelector } from "@src/stores/ModalStore";

type Props = {
	sizing: Array<CellSize>;
	datum: Resource;
}

function ItemBody({ sizing, datum }:Props) {
	const setModal = useSetRecoilState(modalAtom);

	const info = (tip:string) => {
		switch (tip) {
			case '아이콘':
				return <Portrait datum={datum} />;
			case '장비명':
				return <Sypo type='p2' weight={500} style={{ wordBreak:'keep-all' }}>{datum.name}</Sypo>;
			case '대분류':
				return <Sypo type='p2' weight={400}>{datum.class}</Sypo>;
			case '소분류':
				return <Sypo type='p2' weight={400}>{datum.division}</Sypo>;
			case '속성':
				return <Sypo type='p2' weight={400}>{datum.category}</Sypo>;
			case '획득처':
				return <Horizon type='text' gain={datum.gain} />
			case '별칭':
				return <Sypo type='p2' weight={400}>{datum.nickname}</Sypo>;
			case '사용성':
				return <Sypo type='p2' weight={400} color={'#808099'}>{datum.usage}</Sypo>;
			default:
				return null;
		}
	}

	const onClickBody = () => {
		setModal({
			show: true,
			contents: (
				<div>
					{ datum.name }
				</div>
			)
		})
	}

	return (
		<Tbody onClick={onClickBody}>
			{
				sizing.map(v => (
					<Cell key={v.tip} flexBasis={v.flexBasis} flexGrow={v.flexGrow} align={v.align}>
						{ info(v.tip) }
					</Cell>
				))
			}
		</Tbody>
	)
}

export default ItemBody;