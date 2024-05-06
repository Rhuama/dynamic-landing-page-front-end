import Header from "@/components/organisms/header";
import CarouselBanner from "@/components/molecules/carousel/carouselBanner"
import Footer from "@/components/organisms/footer";
import News from "@/components/organisms/news";

const API = {
  primaryColor100: "#ffccd0",
  buttonColor: "white",
  secondaryColorText: "#333",
};

export default function Home() {
  return (
    <>
      <Header primaryColor100={API.primaryColor100} buttonColor={API.buttonColor} secondaryColorText={API.secondaryColorText}/>
      <CarouselBanner/>
      <News primaryColor100={API.primaryColor100}/>
      <Footer />
    </>
  );
}
