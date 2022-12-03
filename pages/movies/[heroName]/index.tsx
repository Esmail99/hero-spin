import { NotFound, List } from "components/shared";
import { configs } from "configs";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { IMovieCard } from "types/movie.types";

interface Props {
  movies?: IMovieCard[];
}

export default function Movies({ movies }: Props) {
  const { query } = useRouter();

  const formattedMovies = useMemo(() => {
    return movies?.map((movie) => {
      return {
        title: movie.Title,
        image: movie.Poster === "N/A" ? undefined : movie.Poster,
        imdbID: movie.imdbID,
      };
    });
  }, [movies]);

  if (!formattedMovies) {
    return <NotFound />;
  }

  return (
    <List
      type="movie"
      title={query.heroName + " Movies"}
      items={formattedMovies}
    />
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${configs.OMDB_API_KEY}&s=${context.query.heroName}`
  );

  const data = await res.json();

  return {
    props: {
      movies: data.Response === "True" ? data.Search : null,
    },
  };
};
