import { useEffect } from "react";

const UseEffect = () => {
    useEffect(() => {
        console.log("mount");

        return () => console.log("unmount");
    }, []);

    return (
        <>
            <h2>useEffect</h2>
        </>
    );
};

export default UseEffect;
