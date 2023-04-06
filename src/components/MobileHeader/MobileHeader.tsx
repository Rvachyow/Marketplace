import style from "./MobileHeader.module.scss";
import { Container } from "../Container/Container";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { Link } from "react-router-dom";
import React from "react";
export const MobileHeader = () => {
  const [ open, setOpen ] = React.useState(false);
  const openHandler = React.useCallback(() => {
    setOpen(!open);
  },[open]);
  
  return <div className={style.mobileheader}>
    <Container>
      <div className={style.mobile_container}>
        <div className={style.logo}>
          <Link to={"/"}><img src="./assets/logo.svg" alt="" /></Link>
        </div>
        <div onClick={() => openHandler()} className={style.menu}>
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
        </div>
      </div>
    </Container>
    {open? <ModalMenu handler={openHandler} toggle={open}/> : ""} 
  </div>;
};