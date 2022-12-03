import { useEffect } from "react";
import { createRef, useCallback, useState } from "react";
import { ICard } from "types/card.types";
import { Button } from "./button.component";
import { Card } from "./card.component";

type Props = {
  type: "movie" | "hero";
  title: string;
  items: ICard[];
};

export const List = ({ type, title, items }: Props) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>();

  const refs = items.map(() => {
    return createRef<HTMLDivElement>();
  });

  useEffect(() => {
    if (activeItemIndex === 0 || activeItemIndex) {
      scrollToIndex(activeItemIndex);
    }
  }, [activeItemIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      refs[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
    [refs]
  );

  const pickRandomItem = useCallback(async () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setActiveItemIndex(randomIndex);
  }, [items.length]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center my-4">
      <h1 className="m-2 font-mono text-2xl text-center md:text-2xl md:my-4">
        {title}
      </h1>

      <Button
        title={`Pick A Random ${type === "hero" ? "Hero" : "Movie"}`}
        onClick={pickRandomItem}
        className="my-4"
      />

      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          return (
            <div
              ref={refs[index]}
              key={item.title}
              className="m-2 md:m-3 max-w-xs w-60"
            >
              <Card
                type={type}
                data={item}
                active={index === activeItemIndex}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
