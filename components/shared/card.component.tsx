import Image from "next/image";
import Link from "next/link";
import { ICard } from "../../types/card.types";

type Props = {
  type: "movie" | "hero";
  data: ICard;
};

export const Card = ({ type, data }: Props) => {
  return (
    <Link href={type === "hero" ? `/movies/${data.title}` : "/"}>
      <div className="w-lg rounded-xl overflow-hidden shadow-lg bg-red-500 hover:bg-sky-700 hover:scale-105 duration-300">
        <Image
          src={data.image}
          alt={`${data.title} image`}
          width={2000}
          height={2000}
          layout="responsive"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>

          {data.description && (
            <p className="text-gray-700 text-base">{data.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};
