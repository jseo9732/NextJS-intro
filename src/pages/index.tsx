import Seo from '@/components/Seo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

interface IMovie {
  id: number;
  original_title: string;
}

export default function Home({ results }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: IMovie) => (
        <Link key={movie.id} href={`/movies/${movie.original_title}/${movie.id}`}>
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (await fetch(`http://localhost:3006/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
