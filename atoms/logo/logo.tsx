import Image from "next/image";
import { ILogo } from "./logo.typings";
import RLogo from "../../assests/svg/logo.svg";
import LLogo from "../../assests/png/Group.png";

const Logo = ({rlogo, llogo, size, style }: ILogo): JSX.Element => {

  return rlogo ? (
    <Image
      src={RLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
      style={style}
    />
  ) : llogo ? (
    <Image
      src={LLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
      style={style}
    />
  ) : (
    <Image
      src={RLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
      style={style}
    />
  );
}

export default Logo;
