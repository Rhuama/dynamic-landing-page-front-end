import CarouselNews from "../molecules/carousel/carouselNews";

interface NewsProps {
  primaryColor100: string
}

export default function News({primaryColor100}: NewsProps) {
  return (
    <section className="flex flex-col items-center" style={{backgroundColor:`${primaryColor100}`}}>
      <h2 className="my-6 text-2xl">Acompanhe novidades pelo instagram</h2>
      <CarouselNews/>
    </section>
  );
}
