import React from "react";

export const Counter = ({ subtractNumber = 1, increaseNumber = 1}) => {

    const [currentNumber, setCurrentNumber] = React.useState(0);

    const increaseCounter = (number) => {
        setCurrentNumber(currentNumber + number);
    }

    const subtractCounter = (number) => {
        if ((currentNumber - number) < 0){
            setCurrentNumber(0);
        } else {
            setCurrentNumber(currentNumber - number);
        }
    }

    return (
        <div className="counter">
            <button onClick={() => increaseCounter(increaseNumber)}>+</button>
            <p>{currentNumber}</p>
            <button onClick={() => subtractCounter(subtractNumber)} disabled={currentNumber === 0}>-</button>
        </div>
    );
}