import Image from "next/image";

export default function Whatsapp() {
  return (
    <a href="#" className="fixed bottom-8 right-8 z-50">
      <Image src="/images/whatsapp.png" width={60} height={60} alt="logo" />
    </a>
  );
}
