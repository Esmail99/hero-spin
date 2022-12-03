import { useCallback, useEffect, useMemo, useState } from "react";
import { ICard } from "../../types/card.types";
import { sleep } from "../../utils";
import { Button } from "./button.component";
import { Card } from "./card.component";

type Props = {
  type: "movie" | "hero";
  title: string;
  items: ICard[];
};

export const List = ({ type, title, items }: Props) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>();

  const pickRandomItem = useCallback(async () => {
    for (let counter = 0; counter < 10; counter++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      setActiveItemIndex(randomIndex);

      await sleep(200);
    }
  }, [items.length]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <p className="m-2 font-mono text-lg text-center md:text-2xl md:my-4">
        {title}
      </p>

      <Button
        title={`Pick A Random ${type === "hero" ? "Hero" : "Movie"}`}
        onClick={pickRandomItem}
      />

      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          return (
            <div key={item.title} className="m-2 md:m-3 max-w-xs w-60">
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
