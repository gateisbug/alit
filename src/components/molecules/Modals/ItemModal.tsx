import classNames from "classnames/bind";
import styles from "./Modals.module.scss";
import { Resource } from "@src/defs/types";
import { Mypo, Portrait, Sypo } from "@src/components/atoms";
import { useResponsive } from "@src/hooks";

const cx = classNames.bind(styles);

type Props = {
	res: Resource;
}

function ItemModal({ res }:Props) {
	const { useMediaQuery } = useResponsive();
	const isSmall = useMediaQuery({ maxWidth: 500 });

	return (
		<div className={ cx("ItemModal") }>
			<header className={ cx("item-name") }>
				<Sypo type={'h2'}
				      weight={700}
				      style={{ textAlign:'center' }}>{ res.name }</Sypo>
				<Sypo type={'p1'}
				      weight={400} color='#888'>{ res.nickname }</Sypo>
			</header>
			<section className={ cx("item-index-gain-category") }>
				<Sypo type='p1' weight={500}>개요</Sypo>
				<div className={ cx("box-index-gain-category") }>
					<article className={ cx("item-index") }>
						<Portrait resource={res} size={ (!isSmall) ? 'mx':'sx' } />
					</article>
					<article className={ cx("item-gain") }>
						<Sypo type='p2' weight={400}>{ res.gain.toString() }</Sypo>
					</article>
					<article className={ cx("item-category") }>
						<Sypo type='p2' weight={400}>{ res.class }</Sypo>
						<Sypo type='p2' weight={400}>{ res.division }</Sypo>
						<Sypo type='p2' weight={400}>{ res.category }</Sypo>
					</article>
				</div>
			</section>
			<section className={ cx("item-usage") }>
				<Sypo type='p1' weight={500}>사용성</Sypo>
				<Mypo type='p2' weight={400}>{ res.usage }</Mypo>
			</section>
			<section className={ cx("item-status") }>
				<Sypo type='p1' weight={500}>스탯</Sypo>
				<div className={ cx("box-status") }>
					{
						res.status.map((v, i) => (
							<div key={i} className={ cx("block-status") }>
								<Sypo type='p3' weight={700}>{ v.state }</Sypo>
								<Sypo type='p3' weight={400} color='#888'>{ v.value }</Sypo>
							</div>
						))
					}
				</div>
			</section>
			<section className={ cx("item-explain") }>
				<Sypo type='p1' weight={500}>상세설명</Sypo>
				<Mypo type='p2' weight={400} color='#888'>{ res.explain }</Mypo>
			</section>
		</div>
	)
}

export default ItemModal;