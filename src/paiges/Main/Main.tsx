import style from "./Main.module.scss";
import { Slider } from "../../components/Slider/Slider";
import { Block } from "../../components/Block/Block";
export const Main = () => {
  let arrayTest = new Array(15).fill(null).map((_, i) => i);
  return <div className={style.main}>
    <Slider></Slider>
    <Block array={arrayTest} title="Популярное сегодня"></Block>
  </div>;
};