import { CSSProperties, MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalAtom } from "@src/stores/componentStore";
import { Deco } from "@src/assets";

import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { sleep } from "@src/defs/util";

const cx = classNames.bind(styles);

function Modal() {
	const [modal, setModal] = useRecoilState(modalAtom);

	const style:CSSProperties = (() => {
		const output:CSSProperties = {
			top: window.scrollY
		};

		if(modal.contents !== undefined) {
			output.display = 'flex';
		}
		else {
			output.display = 'none';
		}

		return output;
	})();

	const onClose = async () => {
		setModal(cur => ({...cur, show: false}));
		await sleep(200)
		setModal(cur => ({...cur, contents: undefined}));
	}

	const onClickContents = (e:MouseEvent) => {
		e.stopPropagation();
	}

	return (
		<div className={ cx("Modal", (modal.show)?'show':'hide') } style={style}>
			<div className={ cx("shadow") } onClick={onClose}>
				<div className={ cx("container") } onClick={onClickContents}>
					<div className={ cx("header") }>
						<div className={ cx("icon") } onClick={onClose}><Deco.Close /></div>
					</div>
					<div className={ cx("contents") }>
						{ modal.contents }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal;