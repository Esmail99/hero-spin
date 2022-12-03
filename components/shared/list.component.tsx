import { ICard } from "../../types/card.types";
import { Card } from "./card.component";

type Props = {
  type: "movie" | "hero";
  title: string;
  items: ICard[];
};

export const List = ({ type, title, items }: Props) => {
  return (
    <>
      <p className="m-2 font-mono text-lg text-center md:text-2xl md:my-4">
        {title}
      </p>

      <div className="flex flex-wrap justify-center">
        {items.map((item) => {
          return (
            <div key={item.title} className="m-2 md:m-3 max-w-xs w-60">
              <Card type={type} data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};
