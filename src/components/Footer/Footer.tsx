import style from "./Footer.module.scss";
import { Container } from "../Container/Container";
import { Icon } from "../Header/Icons/Icons";
import { ICONS_ITEM_WHITE } from "../../constants/IconsConst";
export const Footer = () => {
  return <div className={style.footer}>
    <Container>
      <div className={style.footer_container}>
        <div className={style.footer_container_icons}>
          {ICONS_ITEM_WHITE?.map((item, key) => <Icon 
            key={key}
            color="white"
            text={item.text} 
            img={item.img}></Icon>)}
        </div>
        <div className={style.columns_footer}>
          <div className={style.about}>
            <h3>Marketplace</h3>
            <p>© все права защищены 2023</p>
          </div>
          <div className={style.column}>
            <h5>Популярное</h5>
            <ul>
              <li>Netflix</li>
              <li>Кошелёк Steam</li>
              <li>Pornhub</li>
              <li>Origin</li>
              <li>Spotify</li>
              <li>YouTube Premium</li>
            </ul>
          </div>
          <div className={style.column}>
            <h5>Сервисы</h5>
            <div className={style.column_items}>
              <ul>
                <li>Netflix</li>
                <li>Кошелёк Steam</li>
                <li>Pornhub</li>
                <li>Origin</li>
                <li>Spotify</li>
                <li>YouTube Premium</li>
              </ul>
              <ul>
                <li>Xbox Game Pass</li>
                <li>Tinder</li>
                <li>Google Play</li>
                <li>Discord</li>
                <li>Apple</li>
                <li>Яндекс Плюс</li>
              </ul>
            </div>
          </div>
          <div className={style.column}>
            <h5>Новинки</h5>
            <div className={style.column_items}>
              <ul>
                <li>The Last of Us Part I</li>
                <li>Resident Evil 4</li>
                <li>The Great War: Western Front</li>
                <li>DREDGE</li>
                <li>Smalland: Survive the Wilds</li>
              </ul>
              <ul>
                <li>Crime Boss: Rockay City</li>
                <li>Terra Nil</li>
                <li>Have a Nice Death</li>
                <li>Deceive Inc</li>
                <li>WWE 2K23</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>;
};