import { reviews } from '../../data/reviews'
import type { Review } from '../../data/reviews'
import { SectionHeading } from '../ui/SectionHeading'
import './Reviews.css'

function Stars({ n }: { n: number }) {
  return (
    <span className="review__stars" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }, (_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review">
      <Stars n={review.rating} />
      <blockquote className="review__quote">“{review.quote}”</blockquote>
      <figcaption className="review__author">
        <span className="review__avatar" aria-hidden>
          {review.author.charAt(0)}
        </span>
        <span>
          <span className="review__name">{review.author}</span>
          <span className="review__src">Google Review</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Reviews() {
  // Duplicate the track so the marquee loops seamlessly.
  const track = [...reviews, ...reviews]

  return (
    <section className="section reviews" id="reviews">
      <div className="container reviews__head">
        <SectionHeading
          eyebrow="Loved by Guests"
          title="What people remember"
          align="center"
        />
      </div>

      <div className="reviews__marquee">
        <div className="reviews__track">
          {track.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
