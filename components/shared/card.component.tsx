import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description?: string;
};

export const Card = ({ image, title, description }: Props) => {
  return (
    <div className="w-lg rounded-xl overflow-hidden shadow-lg bg-red-500 hover:bg-sky-700 hover:scale-110 duration-300">
      <Image
        src={image}
        alt={`${title} image`}
        width={2000}
        height={2000}
        layout="responsive"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        {description && (
          <p className="text-gray-700 text-base">{description}</p>
        )}
      </div>
    </div>
  );
};
