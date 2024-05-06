import Button from "../atoms/buttons/button";
import MenuHamburguer from "../atoms/buttons/hamburguer"
import NavbarHeader from "../molecules/navbar/navbarHeader"
import Image from "next/image";

interface APIProps {
  primaryColor100: string
  buttonColor: string,
  secondaryColorText: string,
}


export default function Header({primaryColor100, buttonColor, secondaryColorText}: APIProps) {
  return (
    <nav className="relative px-4 py-4 flex justify-between items-center" style={{backgroundColor:`${primaryColor100}`}}>
      <a className="text-3xl font-bold leading-none" href="#">
        <Image src="/images/logo-sem-fundo.png" width={150} height={80} alt="logo" />
      </a>
      <MenuHamburguer color={primaryColor100}/>
      <NavbarHeader />
      <div className="hidden lg:flex">
        <Button
          bgColor={buttonColor}
          textColor={secondaryColorText}
          text="Login"
        />
      </div>
    </nav>
  );
}