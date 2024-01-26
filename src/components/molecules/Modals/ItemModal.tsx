import classNames from "classnames/bind";
import styles from "./Modals.module.scss";
import { Resource } from "@src/defs/types";
import { Mypo, Portrait, Sypo, Plaque, Obtain } from "@src/components/atoms";
// import { useResponsive } from "@src/hooks";

const cx = classNames.bind(styles);

type Props = {
	res: Resource;
}

function ItemModal({ res }:Props) {
	// const { useMediaQuery } = useResponsive();
	// const isSmall = useMediaQuery({ maxWidth: 500 });

	return (
		<div className={ cx("ItemModal") }>
			<header className={ cx("item-name-index") }>
				<article className={ cx("item-index") }>
					<Portrait resource={res} size={ 'mx' } />
				</article>
				<article className={ cx("item-name") }>
					<Sypo type={'h2'}
					      weight={700}
					      style={{ textAlign:'center' }}>{ res.name }</Sypo>
					<Sypo type={'p1'}
					      weight={400} color='#888'>{ res.nickname }</Sypo>
				</article>
			</header>
			<section className={ cx("item-gain-category") }>
				<Sypo type='p1' weight={700}>개요</Sypo>
				<div className={ cx("box-gain-category") }>
					{
						(res.gain.length > 0) &&
						<article className={ cx("item-gain") }>
							<Plaque color="transparent">
								<Obtain strings={res.gain} />
								{/*<Sypo type='p2' weight={400}>{ res.gain.toString() }</Sypo>*/}
							</Plaque>
						</article>
					}
					<article className={ cx("item-category") }>
						{
							(res.class.length > 0) &&
							<Plaque>
								<div className={ cx("block-status") }>
									<Sypo type='p2' weight={700}>대분류</Sypo>
									<Sypo type='p2' weight={400}>{ res.class }</Sypo>
								</div>
							</Plaque>
						}
						{
							(res.division.length > 0) &&
							<Plaque>
								<div className={ cx("block-status") }>
									<Sypo type='p2' weight={700}>소분류</Sypo>
									<Sypo type='p2' weight={400}>{ res.division }</Sypo>
								</div>
							</Plaque>
						}
						{
							(res.category.length > 0) &&
							<Plaque>
								<div className={ cx("block-status") }>
									<Sypo type='p2' weight={700}>속성</Sypo>
									<Sypo type='p2' weight={400}>{ res.category }</Sypo>
								</div>
							</Plaque>
						}
					</article>
				</div>
			</section>
			{
				(res.usage.length > 0) &&
				<section className={ cx("item-usage") }>
					<Sypo type='p1' weight={700}>사용성</Sypo>
					<Plaque color="grey" size="mx">
						<Mypo type='p2' weight={400}>{ res.usage }</Mypo>
					</Plaque>
				</section>
			}
			{
				(res.status.length > 0) &&
				<section className={ cx("item-status") }>
					<Sypo type='p1' weight={700}>스탯</Sypo>
					<div className={ cx("box-status") }>
						{
							res.status.map((v, i) => (
								<Plaque key={i}>
									<div className={ cx("block-status") }>
										<Sypo type='p2' weight={700}>{ v.state }</Sypo>
										<Sypo type='p2' weight={400} color='#888'>{ v.value }</Sypo>
									</div>
								</Plaque>
							))
						}
					</div>
				</section>
			}
			{
				(res.explain.length > 0) &&
				<section className={ cx("item-explain") }>
					<Sypo type='p1' weight={700}>상세설명</Sypo>
					<Plaque color="grey" size="mx">
						<Mypo type='p2' weight={400} color='#888' style={{ whiteSpace: 'pre-wrap' }}>{ res.explain }</Mypo>
					</Plaque>
				</section>
			}
		</div>
	)
}

export default ItemModal;