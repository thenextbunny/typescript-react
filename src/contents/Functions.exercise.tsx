import { useState } from "react";

const FunctionsExercise = () => {
    const [total, setTotal] = useState(0);

    return (
        <>
            <h2>Functions exercise</h2>
            <Button total={total} setTotal={setTotal} />
        </>
    );
};

type ButtonProps = {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ total, setTotal }: ButtonProps) => (
    <button onClick={() => setTotal((previous) => previous + 1)} type="button">
        Add 1 to {total}
    </button>
);

export default FunctionsExercise;
