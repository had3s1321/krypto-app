import { getCarouselSliderData } from "@/actions/getCoinCarouselData";
import CoinsCarousel from "./CoinsCarousel";

interface CoinSliderProps {
  query: string | string[] | undefined;
}

const CoinSlider = async ({ query }: CoinSliderProps) => {
  const currency = Array.isArray(query) ? query[0] : query || "usd";
  const data = await getCarouselSliderData(currency);

  return <CoinsCarousel data={data} />;
};

export default CoinSlider;
