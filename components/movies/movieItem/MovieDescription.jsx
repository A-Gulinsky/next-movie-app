
import { Ul, DescriptionUl, DescriptionLi, UserScore, GenresUl, GenresName, Container } from "./MovieDescription.styled"
import { BackBtn } from "./backBtn/BackBtn"
import { Genres } from "./genres/Genres"

const MovieDescription = ({ result }) => {
  const { poster_path, title, release_date, vote_average, overview } = result
  const img = `${`https://image.tmdb.org/t/p/w300`}${poster_path}`
  const date = release_date && release_date.slice(0,4)
  const score = (Math.floor(vote_average * 10) / 10).toString()

  return (

    <Container>
      <BackBtn />

      <Ul>

        <li>
          <img src={img} alt="poster"/>
        </li> 

        <li>
          <DescriptionUl>

            <DescriptionLi>
              <h1>{title}({date})</h1>
            </DescriptionLi>

            <DescriptionLi>
              <p>User Score: <UserScore>{score}</UserScore></p>
            </DescriptionLi>

            <DescriptionLi>
              <b>Overview</b>
              <p>{overview}</p>
            </DescriptionLi>

            <DescriptionLi>
              <Genres movieId={result.id} />
            </DescriptionLi>
            

          </DescriptionUl>
        </li>
      </Ul>
    </Container>
  )
}

export {MovieDescription}