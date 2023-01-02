import { useResource } from "@src/hooks";
import { JsonChain, Resource } from "@src/defs/types";
import Gordias, { Longinus, Portrait, Sypo, Table } from "@src/components/atoms";
import classNames from "classnames/bind";
import styles from "./Datagrid.module.scss";
import useResponsive from "@src/hooks/useResponsive";
import { useSetRecoilState } from "recoil";
import { modalAtom } from "@src/stores/componentStore";

const cx = classNames.bind(styles);

function ItemGrid() {
	const { searchData } = useResource();
	const { sizeIs } = useResponsive();

	const setModal = useSetRecoilState(modalAtom);

	// const headers:Array<JsonChain> = [
	// 	{ index: 'index', text: '아이콘', size: 'sx' },
	// 	{ index: 'name', text: '장비명', size: 'lx' },
	// 	// { index: 'tier', text: '등급', size: 'sx' },
	// 	{ index: 'class', text: '대분류', size: 'sx' },
	// 	{ index: 'division', text: '소분류', size: 'sx' },
	// 	{ index: 'category', text: '속성', size: 'sx' },
	// 	{ index: 'gain', text: '획득처', size: 'lx' },
	// 	{ index: 'nickname', text: '별칭', size: 'mx' },
	// 	// { index: 'status', text: '스탯', size: 'sx' },
	// 	{ index: 'usage', text: '사용성', size: 'xx' },
	// 	{ index: 'explain', text: '설명', size: 'xx' },
	// ];

	const headers:Array<JsonChain> = (() => {
		switch (sizeIs) {
			case "desktop":
				return [
					{ index: 'index', text: '아이콘', size: 'sx' },
					{ index: 'name', text: '장비명', size: 'lx' },
					// { index: 'tier', text: '등급', size: 'sx' },
					{ index: 'class', text: '대분류', size: 'sx' },
					{ index: 'division', text: '소분류', size: 'sx' },
					{ index: 'category', text: '속성', size: 'sx' },
					{ index: 'gain', text: '획득처', size: 'lx' },
					{ index: 'nickname', text: '별칭', size: 'mx' },
					// { index: 'status', text: '스탯', size: 'sx' },
					{ index: 'usage', text: '사용성', size: 'xx' },
					{ index: 'explain', text: '설명', size: 'xx' },
				];
			case "laptop":
				return [
					{ index: 'index', text: '아이콘', size: 'sx' },
					{ index: 'name', text: '장비명', size: 'lx' },
					// { index: 'tier', text: '등급', size: 'sx' },
					{ index: 'class', text: '대분류', size: 'sx' },
					{ index: 'division', text: '소분류', size: 'sx' },
					{ index: 'category', text: '속성', size: 'sx' },
					{ index: 'gain', text: '획득처', size: 'lx' },
					{ index: 'nickname', text: '별칭', size: 'mx' },
					// { index: 'status', text: '스탯', size: 'sx' },
					{ index: 'usage', text: '사용성', size: 'xx' },
					// { index: 'explain', text: '설명', size: 'xx' },
				];
			case "tablet":
				return [
					{ index: 'index', text: '아이콘', size: 'sx' },
					{ index: 'name', text: '장비명', size: 'xx' },
					// { index: 'tier', text: '등급', size: 'sx' },
					// { index: 'class', text: '대분류', size: 'xx' },
					{ index: 'division', text: '소분류', size: 'xx' },
					{ index: 'category', text: '속성', size: 'xx' },
					{ index: 'gain', text: '획득처', size: 'xx' },
					{ index: 'nickname', text: '별칭', size: 'xx' },
					// { index: 'status', text: '스탯', size: 'sx' },
					// { index: 'usage', text: '사용성', size: 'xx' },
					// { index: 'explain', text: '설명', size: 'xx' },
				];
			case "mobile":
				return [
					{ index: 'index', text: '아이콘', size: 'sx' },
					{ index: 'name', text: '장비명', size: 'xx' },
					// { index: 'tier', text: '등급', size: 'sx' },
					// { index: 'class', text: '대분류', size: 'xx' },
					{ index: 'division', text: '소분류', size: 'xx' },
					// { index: 'category', text: '속성', size: 'xx' },
					// { index: 'gain', text: '획득처', size: 'xx' },
					{ index: 'nickname', text: '별칭', size: 'xx' },
					// { index: 'status', text: '스탯', size: 'sx' },
					// { index: 'usage', text: '사용성', size: 'xx' },
					// { index: 'explain', text: '설명', size: 'xx' },
				];
		}
	})();

	const onClickItem = () => {
		setModal({
			show: true,
			contents: 'hello'
		})
	}

	const renderHead = (head:JsonChain) => {
		switch (head.index) {
			case 'index': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'name': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'class': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'division': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'category': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'gain': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'nickname': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'usage': return <Sypo weight={700}>{ head.text }</Sypo>
			case 'explain': return <Sypo weight={700}>{ head.text }</Sypo>
		}
	}

	const renderBody = (value:Resource, body:JsonChain) => {
		switch (body.index) {
			case 'index':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Portrait resource={value} />
					</Table.Cell>
				)
			case 'name':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Sypo type='p2' weight={500}>{ value.name }</Sypo>
					</Table.Cell>
				)
			case 'class':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Sypo type='p2' weight={400}>{ value.class }</Sypo>
					</Table.Cell>
				)
			case 'division':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Sypo type='p2' weight={400}>{ value.division }</Sypo>
					</Table.Cell>
				)
			case 'category':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Sypo type='p2' weight={400}>{ value.category }</Sypo>
					</Table.Cell>
				)
			case 'gain':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}>
						<Gordias strings={ value.gain } />
					</Table.Cell>
				)
			case 'nickname':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ textAlign: 'center', justifyContent: 'center' }}>
						<Sypo type='p2' weight={400}>{ value.nickname }</Sypo>
					</Table.Cell>
				)
			case 'usage':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ alignItems: 'center' }}>
						{/*<Sypo type='p2' weight={400}>{ value.usage }</Sypo>*/}
						<Longinus long={ value.usage } />
					</Table.Cell>
				)
			case 'explain':
				return (
					<Table.Cell key={`${value.name}_${body.index}`}
					            size={body.size}
					            style={{ alignItems: 'center' }}>
						{/*<Sypo type='p2' weight={400}>{ value.explain }</Sypo>*/}
						<Longinus long={ value.explain } />
					</Table.Cell>
				)
		}
	}

	return (
		<div className={ cx("Grid", "item-grid") }>
			<Table.Head>
				{
					headers.map(v => (
						<Table.Cell key={`head_${v.index}`} size={v.size}>
							{ renderHead(v) }
						</Table.Cell>
					))
				}
			</Table.Head>
			{
				(searchData.length !== 0)
				? (
						searchData.map((value, i) => (
							<Table.Body key={`${i}_${value.name}`} onClick={onClickItem}>
								{ headers.map(body => ( renderBody(value, body) )) }
							</Table.Body>
						))
				  )
				: (
					<div className={ cx("empty") }>
						<div className={ cx("emoticon") }>\(o_o)/</div>
						<Sypo type='p1'>검색 결과가 없습니다.</Sypo>
					</div>
				  )
			}

		</div>
	)
}

export default ItemGrid;