import Image from "next/image";
import RLogo from "../../assests/svg/logo.svg";

const Logo = (): JSX.Element => {
  return <Image src={RLogo} alt="Reprezent Me" />;
};

export default Logo;
