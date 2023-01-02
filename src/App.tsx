import RootRouter from "@src/RootRouter";
import classNames from "classnames/bind";
import styles from './styles/App.module.scss';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./components/atoms/Modal";
import { useRecoilValue } from "recoil";
import { modalAtom } from "@src/stores/componentStore";

const cx = classNames.bind(styles);

function App() {
    const navigate = useNavigate();
    const modal = useRecoilValue(modalAtom);

    useEffect(() => {
        navigate('/item');
    }, [])

    useEffect(() => {
        if(modal.show) {
            document.body.style.position = 'fixed'
        }
        else {
            document.body.style.position = 'static'
        }
    }, [modal])

  return (
    <div className={ cx("App") }>
      <RootRouter />
        <Modal />
    </div>
  )
}

export default App
