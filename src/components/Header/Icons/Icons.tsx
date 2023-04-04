import style from "./Icons.module.scss";
import React from "react";
export const Icon = ({ text, img, color }: { text?:string, img?:string, color?:string  }) => {
  const refIcons = React.useRef<any>();
  React.useEffect(() => {
    refIcons.current.style.color = color;
  },[]);
  return <div ref={refIcons} className={style.icons}>
    <img src={img} alt="" />
    <h4>{text}</h4>
  </div>;
};