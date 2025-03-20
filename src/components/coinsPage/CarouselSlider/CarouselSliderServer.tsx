import { getCarouselSliderData } from "@/actions/getCoinMarketData";
import CarouselSlider from ".";

const CarouselSliderServer = async () => {
  const data = await getCarouselSliderData();

  return <CarouselSlider data={data} />;
};

export default CarouselSliderServer;
