import {Ul , Li } from "./MovieCast.styled"

const MovieCast = ({cast}) => {

  return (
    <Ul>
      {cast.map(actor => (

        <Li key={actor.cast_id}>
          <img
            src={`${`https://image.tmdb.org/t/p/w300`}${actor.profile_path}`}
            alt={actor.name}
            width="100"
            height="150"
          />
          <h2>{actor.name}</h2>
        </Li>

      ))}
    </Ul>
  )
}

export {MovieCast}