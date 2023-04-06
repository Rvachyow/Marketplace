import style from "./Card.module.scss";
import { Link } from "react-router-dom";

export const Card = () => {
  return <div className={style.card}>
    <div className={style.img_card}><img src="./assets/gta.svg" alt="" /></div>
    <div className={style.content}>
      <div className={style.price}>
        <div><div className={style.price_item}><p>1 234</p></div></div>
        <p className={style.cart}><img src="./assets/card.svg" alt=""/>123</p>
      </div>
      <p>SALE FORTNITE ВБАКСЫ <br /> 1000-13500 VB |XBOX/PC/PS EPIC</p>
      <div className={style.bottom_item}>
        <Link to={"./fullcard"}><button>Купить</button></Link>
        <div className={style.star}><img src="./assets/star.png" alt="" />
          <p>4.9</p>
        </div>
      </div>
    </div>
  </div>;
};