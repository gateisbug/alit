import RootRouter from "@src/RootRouter";
import classNames from "classnames/bind";
import styles from './styles/App.module.scss';
import { RecoilRoot } from "recoil";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={ cx("App") }>
        <RecoilRoot>
            <RootRouter />
        </RecoilRoot>
    </div>
  )
}

export default App
