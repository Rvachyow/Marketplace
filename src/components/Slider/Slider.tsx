import style from "./Slider.module.scss";
import { Container } from "../Container/Container";
export const Slider = () => {
  return <div className={style.slider}>
    <Container>
      <img src="./assets/slider.svg" alt="" />
    </Container>
  </div>;
};