import Image from "next/image";
import { ILogo } from "./logo.typings";
import RLogo from "../../assests/svg/logo.svg";
import LLogo from "../../assests/png/Group.png";

const Logo = ({rlogo, llogo, size }: ILogo): JSX.Element => {

  return rlogo ? (
    <Image
      src={RLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
    />
  ) : llogo ? (
    <Image
      src={LLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
    />
  ) : (
    <Image
      src={RLogo}
      alt="reprezentme logo"
      loading="lazy"
      width={size}
    />
  );
}

export default Logo;
