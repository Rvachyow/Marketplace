import style from "./AboutCard.module.scss";
import { Container } from "../Container/Container";
export const AboutCard = () => {
  return <div className={style.aboutcard}>
    <Container>
      <div className={style.aboutcard_container}>
        <div className={style.title}>
          <h3>SALE FORTNITE ВБАКСЫ 1000-13500 VB |XBOX/PC/PS EPIC</h3>
        </div>
        <div className={style.stars}>
          <img src="./assets/stars.svg" alt="" />
          <div>4.9/5</div>
        </div>
        <div className={style.line}></div>
        <div className={style.main_content}>
          <div className={style.img_card}>
            <img src="./assets/cardIMG.svg" alt="" />
          </div>
          <div className={style.text}>
            <div className={style.baig}>УСЛУГА</div>
            <h4>О товаре</h4>
            <p className={style.text_baig}>
                Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки системы обучения кадров, 
                соответствует насущным потребностям. Разнообразный и богатый опыт... </p>
            <div className={style.edit}>
              <div className={style.input}>
                <h5>Имя</h5>
                <input placeholder="Имя" type="text" />
              </div>
              <div className={style.input}>
                <h5>Имя</h5>
                <input placeholder="E-mail" type="text" />
              </div>
              <div className={style.input}>
                <h5>Имя</h5>
                <input placeholder="E-mail" type="text" />
              </div>
              <div className={style.price}>
                <div className={style.price_content}><p className={style.border}>1 234₽</p> <p className={style.sail}>1 234₽</p></div>
                <div className={style.counter}>
                  <button><div className={style.minus}></div></button>
                  <p>1</p>
                  <button><div className={style.minus}></div><div className={style.plus}></div></button>
                </div>
              </div>
              <button className={style.btn_edit}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};