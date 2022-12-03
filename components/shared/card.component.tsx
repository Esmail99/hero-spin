import Link from "next/link";
import { ICard } from "../../types/card.types";
import { Image } from "./image.component";

type Props = {
  type: "movie" | "hero";
  data: ICard;
};

export const Card = ({ type, data }: Props) => {
  return (
    <Link href={type === "hero" ? `/movies/${data.title}` : "/"}>
      <div className="flex flex-1 flex-col rounded-xl overflow-hidden shadow-lg bg-red-500 hover:bg-sky-700 hover:scale-105 duration-300">
        <div className="relative aspect-square">
          <Image
            src={data.image || ""}
            alt={`${data.title} image`}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-4 text-center">
          <div className="font-bold font-mono text-lg mb-2 h-16 text-center items-center justify-center flex">
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
