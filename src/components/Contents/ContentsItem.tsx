import {useEffect, useState} from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { IItem } from "resource/interface";
import Icon from "components/Icon";
import './muiTooltip.scss'
import ItemTooltip from "./ItemTooltip";

interface Props {
	item: IItem;
}

const cx = classNames.bind(styles);

export default function ContentsItem({ item }:Props) {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<"right"|"bottom">("right");

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	useEffect(() => {
		if(window.innerWidth < 750) {
			setPos("bottom")
		}
		else {
			setPos("right")
		}
	}, [open, window.innerWidth])

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<Tooltip PopperProps={{ disablePortal: true, }}
					 onClose={handleTooltipClose} open={open}
					 disableFocusListener disableHoverListener disableTouchListener
					 title={<><ItemTooltip item={item} /></>} placement={pos} arrow>
				<div className={cx("box-item")} onClick={handleTooltipOpen}
					 onMouseOver={handleTooltipOpen} onMouseLeave={handleTooltipClose}>
					<Icon link={item.link} tier={item.tier} />
				</div>
			</Tooltip>
		</ClickAwayListener>
	)
}

