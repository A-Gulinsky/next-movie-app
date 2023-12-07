import { B, Li, P, Span, Ul } from "./MovieReviews.styled"

const MovieReview = ({ reviews }) => {
  
  return (
    <div>

      {reviews.length ? 
          <Ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <B>Author: <Span>{review.author}</Span></B>
              <P>{review.content}</P>
            </Li>
          ))}
          </Ul>
        : 
          <b>No comments found for this movie</b> 
      }
    </div>
  )
}

export {MovieReview}