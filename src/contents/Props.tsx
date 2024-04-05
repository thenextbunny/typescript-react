import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Props = () => {
    const [name, setName] = useState("");

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const handleClear = () => {
        setName("");
    };

    return (
        <>
            <h2>Props</h2>
            <Input id="name" label="Name" onChange={handleName} value={name} />

            <Button fontSize="1.2rem" onClick={handleClear}>
                Clear name
            </Button>
        </>
    );
};

export default Props;
