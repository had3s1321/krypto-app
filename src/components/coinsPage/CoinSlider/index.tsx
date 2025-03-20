import { getCarouselSliderData } from "@/actions/getCoinMarketData";
import CoinsCarousel from "./CoinsCarousel";

const CoinSlider = async () => {
  const data = await getCarouselSliderData();

  return <CoinsCarousel data={data} />;
};

export default CoinSlider;
