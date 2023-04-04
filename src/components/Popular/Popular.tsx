import style from "./Popular.module.scss";
import { Container } from "../Container/Container";
import { Card } from "../Card/Card";
export const Popular = () => {
  let array = new Array(15).fill(null).map((_, i) => i);
  return <div className={style.popular}>
    <Container>
      <div className={style.popular_container}>
        <div className={style.title}>
          <h2>Популярное сегодня</h2>    
        </div>
        <div className={style.cards}>
          {array?.map((item, index) => <Card key={index}></Card>)}
        </div>
      </div>
    </Container>
  </div>;
};