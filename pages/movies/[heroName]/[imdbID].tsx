import { NextPageContext } from "next";
import { useMemo } from "react";
import { Image, NotFound } from "../../../components/shared";
import { configs } from "../../../configs";
import { IMovie } from "../../../types/movie.types";

interface Props {
  movie?: IMovie;
}

export default function Movie({ movie }: Props) {
  const renderDetails = useMemo(() => {
    if (!movie) {
      return null;
    }

    return (
      <div className="flex flex-1 flex-col md:mx-10">
        {Object.keys(movie)
          .filter((key) => key !== "Poster")
          .map((item) => {
            const key = item as keyof typeof movie;

            if (typeof movie[key] !== "string") {
              return null;
            }

            return (
              <div
                key={key}
                className="font-thin flex-row flex self-start my-2"
              >
                <p className="font-bold mx-2">{key}:</p>
                <p className="font-thin">{movie[key] as string}</p>
              </div>
            );
          })}
      </div>
    );
  }, [movie]);

  if (!movie) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-1">
      <Image
        src={movie.Poster === "N/A" ? "" : movie.Poster}
        alt={`${movie.Title} image`}
        fill
        className="absolute opacity-50 blur-lg"
      />

      <div className="flex flex-1 items-center justify-center flex-col my-8 z-0">
        <h1 className="font-extrabold font-mono m-4 text-3xl md:text-4xl">
          {movie.Title}
        </h1>

        <div className="flex flex-col md:flex-row items-center md:my-10 lg:px-20 xl:px-56">
          <div className="relative flex flex-1 aspect-square w-full my-3">
            <Image
              src={movie.Poster === "N/A" ? "" : movie.Poster}
              alt={`${movie.Title} image`}
              fill
              className="object-contain"
            />
          </div>

          {renderDetails}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${configs.OMDB_API_KEY}&i=${context.query.imdbID}`
  );

  const data = await res.json();

  return {
    props: {
      movie: data.Response === "True" ? data : null,
    },
  };
};
