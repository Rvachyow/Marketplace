import style from "./Menu.module.scss";
export const Menu = () => {
  return <div className={style.menu}>
    <div className={style.lines}>
      <div className={style.line1}></div>
      <div className={style.line2}></div>
      <div className={style.line3}></div>
    </div>
    <div>Каталог</div>
  </div>;
};