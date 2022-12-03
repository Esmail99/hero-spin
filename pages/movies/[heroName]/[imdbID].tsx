import { NextPageContext } from "next";
import { configs } from "../../../configs";
import { IMovie } from "../../../types/movie.types";

interface Props {
  movie?: IMovie;
}

export default function Movie({ movie }: Props) {
  if (!movie) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="font-thin">No Movie found!</p>
      </div>
    );
  }

  return <p>welcome to {movie.Title}</p>;
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
