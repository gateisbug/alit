import classNames from "classnames/bind";
import styles from "style/app.module.scss";
import Header from "components/Header";
import HomeHero from "components/HomeHero";
import Nav from "components/Nav";
import RootRouter from "./RootRouter";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("App")}>
        <Header />
        <HomeHero />
        <Nav />
        <RootRouter />
    </div>
  )
}

export default App;
