import LogoInsta from "../../../assets/Home/logoInsta.png";
import carousel01 from "../../../assets/MainHome/carousel01.jpeg";
import localizacao from "../../../assets/MainHome/localizacao.png";
import calendario from "../../../assets/MainHome/calendario.png";
import banner from "../../../assets/Home/fundoHome.jpg";
import img01_91qtJeTTZvGu2THVG626aedff0a20f from "../../../assets/Projects/carvao01.jpg";
import img02_91qtJeTTZvGu2THVG626aedff0a20f from "../../../assets/Projects/carvao02.jpg";
import whatsapp from "../../../assets/Footer/whatsapp.png";
import email from "../../../assets/Footer/email.png";
import site from "../../../assets/Footer/site.png";

import { FcMenu, FcCalendar } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { FiArrowLeftCircle } from "react-icons/fi";

export function returnIcon(icon: string | undefined) {
  switch (icon) {
    case "instagram":
      return LogoInsta;

    case "FiArrowLeftCircle":
      return <FiArrowLeftCircle />;

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

    case "banner":
      return <img src={banner} alt="banner" />;

    case "AiOutlineClose":
      return <AiOutlineClose />;

    case "img01_91qtJeTTZvGu2THVG626aedff0a20f":
      return (
        <img src={img01_91qtJeTTZvGu2THVG626aedff0a20f} alt="fundo Teste" />
      );

    case "img02-91qtJeTTZvGu2THVG626aedff0a20f":
      return (
        <img src={img02_91qtJeTTZvGu2THVG626aedff0a20f} alt="fundo Teste" />
      );

    case "whatsapp":
      return <img src={whatsapp} alt="whatsapp" />;

    case "email":
      return <img src={email} alt="email" />;

    case "site":
      return <img src={site} alt="site" />;
  }
}
