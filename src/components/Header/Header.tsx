import style from "./Header.module.scss";
import { Container } from "../Container/Container";
import { Menu } from "../Menu/Menu";
import { ICONS_ITEM } from "../../constants/IconsConst";
import { Icon } from "./Icons/Icons";
export const Header = () => {
  return <div className={style.header}>
    <Container>
      <div className={style.header_container}>
        <div className={style.logo_header}>
          <img src="./assets/logo.svg" alt="" />
        </div>
        <Menu></Menu>
        <div className={style.search}>
          <input type="text" placeholder="Например, прокси"/>
          <button>Искать </button>
        </div>
      </div>
      <div className={style.header_container_icons}>
        {ICONS_ITEM?.map((item, key) => <Icon 
          key={key}
          text={item.text} 
          img={item.img}></Icon>)}
      </div>
    </Container>
  </div>;
};