import CarouselNews from "../molecules/carousel/carouselNews";


interface NewsProps {
  primaryColor100: string
}

export default function News({primaryColor100}: NewsProps) {
  return (
    <section className="flex items-center" style={{backgroundColor:`${primaryColor100}`}}>
      <h3 className="">Veja o que tem de novo por aqui:</h3>
      <CarouselNews/>
    </section>
  );
}
