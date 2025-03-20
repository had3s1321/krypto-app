import Image from "next/image";
import { CircleX } from "lucide-react";
import { CarouselItemInterface } from "./CoinsCarousel";

const SelectedCoins = ({
  list,
  handleClick,
}: {
  list: CarouselItemInterface[];
  // eslint-disable-next-line
  handleClick: (arg: CarouselItemInterface) => void | undefined;
}) => {
  return (
    <div className="absolute -mt-12 flex w-fit gap-3">
      {list.map((el) => (
        <span
          key={el.name}
          onClick={() => handleClick(el)}
          className="flex items-center gap-1 rounded-sm bg-[var(--primary-foreground)] px-2 py-1 hover:cursor-pointer"
        >
          <Image src={el.image} alt={el.name} width={20} height={20} />
          {el.name}
          <CircleX size={16} strokeWidth={1} />
        </span>
      ))}
    </div>
  );
};

export default SelectedCoins;
