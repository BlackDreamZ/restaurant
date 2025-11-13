import {act, useReducer} from "react";
import './style.scss';

const DEFAULT_FORM_VALUE = {
    name: "",
    review: "",
    rating: 5,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload };
        case "SET_REVIEW":
            return {...state, review: action.payload };
        case "SET_RATING":
            return action.payload < 6 && action.payload > 0 ? {...state, rating: action.payload} : {...state};
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    console.log(formValue);

    return (
        <form className="reviewForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={formValue.name}
                onChange={(event) => dispatch({ type: "SET_NAME", payload: event.target.value })
            }/>
            <label htmlFor="review">Review</label>
            <textarea
                id="review"
                value={formValue.review}
                onChange={(event) => dispatch({ type: "SET_REVIEW", payload: event.target.value })
            }/>
            <label htmlFor="rating">Rating</label>
            <input
                id="rating"
                type="number"
                value={formValue.rating}
                onChange={(event) => dispatch({ type: "SET_RATING", payload: event.target.value })
            }/>
        </form>
    )
}