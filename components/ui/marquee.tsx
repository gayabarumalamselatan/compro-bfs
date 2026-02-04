import Image from "next/image";
import clsx from "clsx";

interface LogoItem {
  src: string;
  title: string;
  desc: string;
}

interface Props {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: number; // detik
}

export function Marquee({ items, direction = "left", speed = 30 }: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={clsx(
          "group flex w-max gap-5 hover:paused",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex min-w-[160px] flex-col items-center gap-3 bg-gray-100 p-4 rounded-lg"
          >
            <div className="relative h-16 w-32 transition">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-center font-light text-muted-foreground">
                {item.desc}
              </span>
              <span className="text-xs font-medium text-center">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
