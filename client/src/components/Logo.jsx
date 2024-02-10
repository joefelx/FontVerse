import LogoBlack from "../assets/Fontverse Logo Black.png";
import LogoWhite from "../assets/Fontverse Logo White.png";

function LogoW({ className }) {
  return <img src={LogoWhite} alt="white" className={className} />;
}
function LogoB({ className }) {
  return <img src={LogoBlack} alt="black" className={className} />;
}

export { LogoW, LogoB };
