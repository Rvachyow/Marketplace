import style from "./Slider.module.scss";
import { Container } from "../Container/Container";
import React, { useRef } from "react";

export const Slider = () => {
  const [ transform, setTransform ] = React.useState(0);
  const refImg = useRef<any>(null);
  const refContainer = useRef<any>(null);

  const swithHandlerRight = () => {
    setTimeout(() => {
      setTransform((transform:any):any => {
        let current = transform;
        if (current === 0) {
          return current = -refImg?.current?.clientWidth;}
        current = current + -refImg?.current?.clientWidth;
        if (current <= (-refImg?.current?.clientWidth * refContainer?.current?.childElementCount)) {
          return current = 0;
        } else return current;
      });
    },300);
    
  };
  const swithHandlerLeft = () => {
    setTimeout(() => {
      setTransform((transform:any):any => {
        let current = transform;
        if (current === 0) {
          return current = 
              (-refImg?.current?.clientWidth * (refContainer?.current?.childElementCount - 1))}
        current = current + refImg?.current?.clientWidth;
        return current;
      });
    }, 300);
  }; 
  React.useEffect(() => {
    const interval = setInterval(() => {
      swithHandlerRight();
    }, 15000);
    return () => clearInterval(interval);
  }, []);
 
  return <div className={style.slider}>
    <Container>
      <div ref={refContainer} className={style.container_slider}>
        <div  style={{transform: `translateX(${transform}px)`}}>
          <img ref={refImg} src="./assets/banner/banner1.svg" alt="" />
          <span className={style.text_banner}>
            <h2>Подарочные карты</h2>
            <p>Равным образом рамки и место обучения кадров представляет собой интересный эксперимент 
              проверки системы обучения кадров, соответствует насущным потребностям.</p>
            <button>Получить <img src="./assets/next.svg" alt="" /></button>
          </span>
        </div>
        <div  style={{transform: `translateX(${transform}px)`}}>
          <img  src="./assets/banner/banner2.svg" alt="" />
          <span className={style.text_banner}>
            <h2>Пополнение кошелька</h2>
            <p>Равным образом рамки и место обучения кадров представляет собой интересный эксперимент 
              проверки системы обучения кадров, соответствует насущным потребностям.</p>
            <button>Получить <img src="./assets/next.svg" alt="" /></button>
          </span>
        </div>
        <div  style={{transform: `translateX(${transform}px)`}}>
          <img src="./assets/banner/banner3.svg" alt="" />
          <span className={style.text_banner}>
            <h2>Подарочные карты</h2>
            <p>Равным образом рамки и место обучения кадров представляет собой интересный эксперимент 
              проверки системы обучения кадров, соответствует насущным потребностям.</p>
            <button>Получить <img src="./assets/next.svg" alt="" /></button>
          </span>
        </div>
        <div  style={{transform: `translateX(${transform}px)`}}>
          <img src="./assets/banner/banner4.svg" alt="" />
          <span className={style.text_banner}>
            <h2>Подарочные карты</h2>
            <p>Равным образом рамки и место обучения кадров представляет собой интересный эксперимент 
              проверки системы обучения кадров, соответствует насущным потребностям.</p>
            <button>Получить <img src="./assets/next.svg" alt="" /></button>
          </span>
        </div>
      </div>
      <button onClick={() => swithHandlerLeft()} className={style.btn_slider_left}><img src="./assets/v.svg" alt="" /></button>
      <button onClick={() => swithHandlerRight()} className={style.btn_slider_rigth}><img src="./assets/v.svg" alt="" /></button>
    </Container>
  </div>;
};