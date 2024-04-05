import { useState } from "react";

const Interference = () => {
    const [total, setTotal] = useState(0);

    const increment = () => {
        setTotal((total) => total + 1);
    };

    const decrement = () => {
        setTotal((total) => total - 1);
    };

    return (
        <>
            <h2>Interference</h2>
            <p>Total: {total}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    );
};

export default Interference;
