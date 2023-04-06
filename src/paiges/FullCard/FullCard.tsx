import style from "./FullCard.module.scss";
import { AboutCard } from "../../components/AboutCard/AboutCard";
import { Block } from "../../components/Block/Block";
import { Description } from "../../components/Description/Description";
import { Reviews } from "../../components/Reviews/Reviews";
export const FullCard = () => {
  let arrayTest = new Array(5).fill(null).map((_, i) => i);
  return <div className={style.fullcard}>
    <AboutCard></AboutCard>
    <Block array={arrayTest} title="Похожие товары" ></Block>
    <Block array={arrayTest} title="Покупают вместе" ></Block>
    <Description></Description>
    <Reviews></Reviews>
  </div>;
};