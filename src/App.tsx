import RootRouter from "@src/RootRouter";
import classNames from "classnames/bind";
import styles from './styles/App.module.scss';
import { Modal } from "@src/components/atoms";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={ cx("App") }>
        <RootRouter />
        <Modal />
    </div>
  )
}

export default App
