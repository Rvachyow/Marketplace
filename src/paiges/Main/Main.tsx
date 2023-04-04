import style from "./Main.module.scss";
import { Slider } from "../../components/Slider/Slider";
import { Popular } from "../../components/Popular/Popular";
export const Main = () => {
  return <div className={style.main}>
    <Slider></Slider>
    <Popular></Popular>
  </div>;
};