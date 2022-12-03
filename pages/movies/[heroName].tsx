import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { List } from "../../components/shared";
import { configs } from "../../configs";
import { IMovie } from "../../types/movie.types";

interface Props {
  movies: IMovie[];
}

export default function Movies({ movies }: Props) {
  const { query } = useRouter();

  const formatMovies = useMemo(() => {
    return movies.map((movie) => {
      return {
        title: movie.Title,
        image: movie.Poster === "N/A" ? undefined : movie.Poster,
      };
    });
  }, [movies]);

  return <List title={query.heroName + " Movies"} items={formatMovies} />;
}

export const getServerSideProps = async (context: NextPageContext) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${configs.OMDB_API_KEY}&s=${context.query.heroName}`
  );

  const data = await res.json();

  return {
    props: {
      movies: data.Search,
    },
  };
};
