import { MouseEvent } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { useRecoilState } from "recoil";
import { modalAtom } from "@src/stores/ModalStore";

const cx = classNames.bind(styles);

function Modal() {
	const [modal, setModal] = useRecoilState(modalAtom);

	const onClickShadow = (e:MouseEvent) => {
		const flag = ((e.target as any).classList[0] as string).includes('shadow');
		if(flag) {
			e.stopPropagation();

			setModal(cur => ({
				...cur, show: false
			}))
		}
	}

	const onClickClose = (e:MouseEvent) => {
		e.stopPropagation();

		setModal(cur => ({
			...cur, show: false
		}))
	}

	const show = (() => {
		return (modal.show) ? 'show':undefined;
	})();

	return (
		<div className={ cx("shadow", show) } onClick={onClickShadow}>
			<div className={ cx("Modal") }>
				<header className={ cx("exit") }>
					<div className={ cx("button") } onClick={onClickClose}>X</div>
				</header>
				<section className={ cx("container") }>
					{ modal.contents }
				</section>
			</div>
		</div>
	)
}

export default Modal;