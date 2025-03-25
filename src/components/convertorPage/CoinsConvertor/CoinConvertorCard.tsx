import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import Image from "next/image";
// eslint-disable-next-line
const CoinConvertorCard = ({ title, coin }: { title: string; coin: any }) => {
  return (
    <Card className="w-full border-none bg-white text-black shadow-none">
      <CardHeader>
        <CardTitle className="text-sm font-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="mb-4 flex gap-2 text-xl font-medium">
          <Image src={coin.image} alt={coin.name} width={24} height={24} />
          {coin.name} ({coin.symbol})
        </span>
        <div className="h-[1px] w-full bg-black"></div>
      </CardContent>
      <CardFooter className="-mt-4">
        1 {coin.symbol} = {coin.price}
      </CardFooter>
    </Card>
  );
};

export default CoinConvertorCard;
