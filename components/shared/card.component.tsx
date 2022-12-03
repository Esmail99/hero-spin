import Link from "next/link";
import { ICard } from "../../types/card.types";
import { Image } from "./image.component";

type Props = {
  type: "movie" | "hero";
  data: ICard;
  active: boolean;
};

export const Card = ({ type, data, active }: Props) => {
  return (
    <Link
      href={
        type === "hero"
          ? `/movies/${data.title}`
          : `/movies/${data.title}/${data.imdbID}`
      }
    >
      <div
        className={`flex flex-1 flex-col rounded-xl overflow-hidden shadow-lg bg-red-500 hover:scale-105 duration-300 ${
          active && "bg-sky-700 scale-105"
        }`}
      >
        <div className="relative aspect-square">
          <Image
            src={data.image || ""}
            alt={`${data.title} image`}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-4 text-center">
          <div
            className={`font-bold font-mono mb-2 h-16 text-center items-center justify-center flex ${
              data.title.length > 25 ? "text-sm" : "text-lg"
            }`}
          >
            {data.title}
          </div>

          {data.description && (
            <p className="text-gray-700 text-base">{data.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

Card.defaultProps = {
  active: false,
};
