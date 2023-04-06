import style from "./ModalMenu.module.scss";
import ReactDOM from "react-dom";
import { Container } from "../Container/Container";
import { Icon } from "../Header/Icons/Icons";
import { ICONS_ITEM } from "../../constants/IconsConst";
import clsx from "clsx";

const portal = document.getElementById("portal");

export const ModalMenu = ({ toggle, handler }: { toggle?:any, handler:Function }) => 
 
  ReactDOM.createPortal(
    <div className={style.ModalMenu}>
      <Container>
        <div className={clsx(style.modal_container, {[style.modal_container_active]:toggle})}>
          <nav>
            <ul>
              {ICONS_ITEM?.map((item, index) => <Icon key={index} {...item}></Icon>)}
            </ul>
          </nav>
        </div>
      </Container>
      <div onClick={() => handler()} className={style.bottom}></div>
    </div>,
    //@ts-ignore
    portal,
  );