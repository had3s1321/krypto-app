import Image from "next/image";

const DialogImage = ({ src, alt }: { src?: string; alt?: string }) => {
  return (
    <div className="flex w-1/3 items-center justify-center rounded-md bg-[var(--clr-nav-foreground)] dark:bg-[var(--secondary-foreground)]">
      {src && alt ? (
        <div className="flex h-16 w-16 items-center justify-center rounded-sm dark:bg-[var(--clr-nav-foreground)]">
          <Image
            src={src}
            alt={alt}
            width={32}
            height={32}
            className="rounded-sm"
          />
        </div>
      ) : (
        "Please select a coin."
      )}
    </div>
  );
};

export default DialogImage;
