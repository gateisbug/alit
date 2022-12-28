import RootRouter from "@src/RootRouter";
import classNames from "classnames/bind";
import styles from './styles/App.module.scss';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [])

  return (
    <div className={ cx("App") }>
      <RootRouter />
    </div>
  )
}

export default App
