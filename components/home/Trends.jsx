import { Ul, LinkStyled } from "./Trends.styled"

// API
const baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA3OWJhZDEwZWQxODQ1M2Y2MjZkNWFlYTk4YWI3NCIsInN1YiI6IjY0ZTBiNjBkYWFlYzcxMDNmOTk4MDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZ71jAC2kXZRjWif2pQkTYjmwqMcqAvb4d3kK3-HrX8',
  },
  next: {
    revalidate: 5
  }
};

async function getData() {
  const response = await fetch(`${baseURL}/trending/all/day?language=en-US`, options);
  return response.json();
};
// 

async function Trends() {

  const movies = await getData()

  return (
   <Ul>
     {movies.results.map(result => (
        <li key={result.id}>
          <LinkStyled href={`/movies/${result.id}`}>{result.title}</LinkStyled>
        </li>
      ))}
    </Ul>
  )
}

export {Trends}