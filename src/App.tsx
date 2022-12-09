import RootRouter from "@src/RootRouter";
import classNames from "classnames/bind";
import styles from './styles/App.module.scss';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={ cx("App") }>
      <RootRouter />
    </div>
  )
}

export default App
