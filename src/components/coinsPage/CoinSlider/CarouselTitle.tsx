const CarouselTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-8 font-grotesk text-sm text-[var(--clr-nav-text)]">
      {title}
    </h2>
  );
};

export default CarouselTitle;
