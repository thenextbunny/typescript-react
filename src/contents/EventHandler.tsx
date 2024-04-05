import React, { useState } from "react";

const EventHandler = () => (
    <>
        <h2>Event Handler</h2>
        <Checkbox label="Terms and conditions" />
    </>
);

const Checkbox = ({ label }: { label: string }) => {
    const [checked, setChecked] = useState(false);

    /*
    const handleChecked: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.currentTarget.checked);
    };
    */

    return (
        <label>
            <input
                // It's necessary to indicate the type
                // onChange={handleChecked}
                // Not necessary
                onChange={({ currentTarget }) => setChecked(currentTarget.checked)}
                type="checkbox"
            />{" "}
            {label}
        </label>
    );
};

export default EventHandler;
