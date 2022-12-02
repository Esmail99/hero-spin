import { ICard } from "../../types/card.types";
import { Card } from "./card.component";

type Props = {
  items: ICard[];
};

export const List = ({ items }: Props) => {
  return (
    <div className="flex flex-1 flex-wrap m-5 justify-center">
      {items.map((item) => {
        return (
          <div key={item.title} className="m-2">
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
};
