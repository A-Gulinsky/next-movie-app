import { SearchMovies } from "@/components/movies/searchMovies/searchMovies"

export const metadata = {
  title: 'Movies',
  description: 'Description | Movies Page',
  openGraph: {
    title: 'Movies',
    description: 'More than 100500 movies on our service',
    siteName: 'Movies Service',
    type: 'article',
    url: 'https://next-movie-app-seven.vercel.app/movies',
    images: [
      {
        url: 'https://img.freepik.com/free-vector/film-strip-background-with-clapper-board_1017-33456.jpg?w=1380&t=st=1701982718~exp=1701983318~hmac=8b9e520cd8980679f9bf06dcd3fcfb633b8b8157f824429cb8c51a1e3f36a6cd',
        width: 500,
        height: 500,
        alt: 'Movies Page'
      }
    ]
  }
}

export default function Movies() {


  return (
    <>
      <SearchMovies />
    </>
  )
}