import style from "./Reviews.module.scss";
import { Container } from "../Container/Container";
export const Reviews = () => {
  return <div className={style.reviews}>
    <Container>
      <div className={style.reviews_container}>
        <h3>Отзывы</h3>
        <div className={style.coments_container}>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
          <div className={style.coment}>
            <div className={style.container}>
              <div className={style.items}>
                <div className={style.avatar}>
                  <div className={style.round}>A</div>
                  <p>Андрей</p>
                </div>
                <div className={style.text}>Все работает. Спасибо!</div>
              </div>
              <div className={style.date}>
                <p>11.02.2023</p>
                <img src="./assets/StartS.svg" alt="" />
                <p>4.9/5</p>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};