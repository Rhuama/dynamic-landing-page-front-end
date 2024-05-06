import Button from "../atoms/buttons/button";
import MenuHamburguer from "../atoms/buttons/hamburguer"
import NavbarHeader from "../molecules/navbar/navbarHeader"
import Image from "next/image";

const API = {
  primaryColor100: "#ffccd0",
  buttonColor: "white",
  secondaryColorText: "#333",
};

export default function Header() {
  return (
    <nav className="relative px-4 py-4 flex justify-between items-center" style={{backgroundColor:`${API.primaryColor100}`}}>
      <a className="text-3xl font-bold leading-none" href="#">
        <Image src="/images/logo-sem-fundo.png" width={150} height={80} alt="logo" />
      </a>
      <MenuHamburguer color={API.primaryColor100}/>
      <NavbarHeader />
      <div className="hidden lg:flex">
        <Button
          bgColor={API.buttonColor}
          textColor={API.secondaryColorText}
          text="Login"
        />
      </div>
    </nav>
  );
}