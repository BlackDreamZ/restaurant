import './styles.css';

export const RestaurantTab = ({    children, onClick   }) => {

    return <button onClick={onClick} className={'RestaurantTab'}>{children}</button>
}