const CarouselTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="mb-8 font-grotesk text-sm text-[var(--clr-nav-text)]">
      {title}
    </h3>
  );
};

export default CarouselTitle;
