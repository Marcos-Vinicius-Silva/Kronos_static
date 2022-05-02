import LogoInsta from "../../../assets/Home/logoInsta.png";
import carousel01 from "../../../assets/MainHome/carousel01.jpeg";
import localizacao from "../../../assets/MainHome/localizacao.png";
import calendario from "../../../assets/MainHome/calendario.png";

import { FcMenu, FcCalendar } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

export function returnIcon(icon: string | undefined) {
  switch (icon) {
    case "instagram":
      return LogoInsta;
    case "FcMenu":
      return <FcMenu />;
    case "carousel01":
      return <img src={carousel01} alt="Evento" />;
    case "FcCalendar":
      return <FcCalendar />;
    case "localizacao":
      return <img src={localizacao} alt="localização" />;
    case "calendario":
      return <img src={calendario} alt="Calendario" />;
    case "AiOutlineClose":
      return <AiOutlineClose />;
  }
}
