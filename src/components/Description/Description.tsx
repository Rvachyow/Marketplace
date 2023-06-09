import style from "./Description.module.scss";
import { Container } from "../Container/Container";
export const Description = () => {
  return <div className={style.description}>
    <Container>
      <div className={style.description_container}>
        <h3>Описание</h3>
        <p>Равным образом рамки и место обучения кадров представляет 
        собой интересный эксперимент проверки системы обучения кадров, 
        соответствует насущным потребностям. Разнообразный и богатый 
        опыт дальнейшее развитие различных форм деятельности позволяет 
        выполнять важные задания по разработке систем массового участия. 
        Товарищи! постоянный количественный рост и сфера нашей активности 
        влечет за собой процесс внедрения и модернизации существенных финансовых
        и административных условий. С другой стороны укрепление и развитие структуры </p></div>
    </Container>
  </div>;
};