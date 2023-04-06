import style from "./Block.module.scss";
import { Container } from "../Container/Container";
import { Card } from "../Card/Card";
export const Block = ({ array, title } : { array?: any, title?: string}) => {
  
  return <div className={style.popular}>
    <Container>
      <div className={style.popular_container}>
        <div className={style.title}>
          <h2>{title}</h2>    
        </div>
        <div className={style.cards}>
          {array?.map((item:any, index:number) => <Card key={index}></Card>)}
        </div>
      </div>
    </Container>
  </div>;
};