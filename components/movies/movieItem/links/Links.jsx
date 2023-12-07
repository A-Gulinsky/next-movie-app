// emotion
import { Ul, Li, LinkStyled } from "./Links.styled"

const Links = ({link}) => {
  
  return (
    <Ul>
      <Li>
        <LinkStyled href={`/movies/${link}/cast`}>Cast</LinkStyled>
      </Li>
      <Li>
        <LinkStyled href={`/movies/${link}/reviews`}>Reviews</LinkStyled>
      </Li>
    </Ul>
  )
}

export {Links}