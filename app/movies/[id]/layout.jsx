import { MovieDescription } from "@/components/movies/movieItem/MovieDescription";
import { Links } from "@/components/movies/movieItem/links/Links";

export async function generateMetadata({ params: { id } }) {
  const movie = await getData(id)
  return {
    title: movie.title,
    description: `Description | Movie id ${movie.id}`
  }
}

// api
const baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA3OWJhZDEwZWQxODQ1M2Y2MjZkNWFlYTk4YWI3NCIsInN1YiI6IjY0ZTBiNjBkYWFlYzcxMDNmOTk4MDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZ71jAC2kXZRjWif2pQkTYjmwqMcqAvb4d3kK3-HrX8',
  },
  next: {
    revalidate: 30
  }
};

async function getData(movieId) {
  const response = await fetch(`${baseURL}/movie/${movieId}?language=en-US`, options);
  return response.json();
};
// 

export default async function MovieLayout({ params: {id},children }) {
  const movie = await getData(id)
  

  return (
    <div>
      <div>
        <MovieDescription result={movie} />
        <Links link={id} />
      </div>
      {children}
    </div>
  )
}
