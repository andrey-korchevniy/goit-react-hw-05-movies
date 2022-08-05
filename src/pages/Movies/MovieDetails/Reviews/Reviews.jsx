import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from 'api/getMoviesList';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(movieId).then(setReviews).catch()
    }, [movieId])

    if (reviews.length !== 0) {
        return (
            <div>
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h4>Author: {author}</h4>
                            <p>{content}</p>
                        </li>))}
                </ul>
            </div>
        )
    } else {
        return <p>We don't have any reviews for this movie</p>
    }
}

export default Reviews;