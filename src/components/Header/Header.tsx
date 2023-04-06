import style from "./Header.module.scss";
import { Container } from "../Container/Container";
import { Menu } from "../Menu/Menu";
import { ICONS_ITEM } from "../../constants/IconsConst";
import { Icon } from "./Icons/Icons";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { Link } from "react-router-dom";
import React from "react";
import useWindowSize from "../../hook/useWindowSize";
import { MobileHeader } from "../MobileHeader/MobileHeader";

export const Header = () => {
  const [ open, setOpen ] = React.useState(false);
  const size = useWindowSize();
  
  const openHandler = React.useCallback(() => {
    setOpen(!open);
  },[open]);

  if (size.width <= 768) {
    return <MobileHeader></MobileHeader>;
  };

  return <div className={style.header}>
    <Container>
      <div className={style.header_container}>
        <div className={style.logo_header}>
          <Link to={"/"}><img src="./assets/logo.svg" alt="" /></Link>
        </div>
        <Menu setOpen={openHandler} ></Menu>
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
    {open? <ModalMenu handler={openHandler} toggle={open}/> : ""} 
    
  </div>;
};