// import './styles.css';

import {Review} from "../Review/component.jsx";

export const Reviews = ({reviews}) => {

    if(!reviews) return null;
    return (
        <>
            <h4>Меню:</h4>
            <ul className={'RestaurantItem__Menu'}>
                {reviews.map((review) => (<Review review={review} key={review.id} />)) }
            </ul>
        </>
    )};