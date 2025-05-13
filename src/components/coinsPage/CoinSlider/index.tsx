import { getCarouselSliderData } from "@/actions/getCoinCarouselData";
import Carousel from "./Carousel";

interface CoinSliderProps {
  query: string | string[] | undefined;
}

const CoinSlider = async ({ query }: CoinSliderProps) => {
  const currency = Array.isArray(query) ? query[0] : query || "usd";
  const data = await getCarouselSliderData(currency);

  return <Carousel data={data} />;
};

export default CoinSlider;
