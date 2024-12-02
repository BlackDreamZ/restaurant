export const Dish = ({dish}) => {
    if (!dish) return null;

    return <div>
        {dish.name}
    </div>
}