import style from "./Menu.module.scss";

export const Menu = ({ setOpen }: { setOpen: Function }) => {
  return <div onClick={() => setOpen()} className={style.menu}>
    <div  className={style.lines}>
      <div className={style.line1}></div>
      <div className={style.line2}></div>
      <div className={style.line3}></div>
    </div>
    <div>Каталог</div>
  </div>;
};