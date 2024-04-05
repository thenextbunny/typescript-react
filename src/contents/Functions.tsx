import Button from "../components/Button";

const Functions = () => {
    const handleClick = (event: React.MouseEvent) => {
        alert("Page X: " + event.pageX);
    };

    const handleClickWithFunctionAnnotation: React.MouseEventHandler = (event) => {
        alert("Page Y: " + event.pageY);
    };

    const handleRandomFunction = (event: React.MouseEvent) => {
        if (Math.floor(Math.random() * 100) % 2 === 0) return handleClick(event);
        handleClickWithFunctionAnnotation(event);
    };

    return (
        <>
            <h2>Functions</h2>
            <Button onClick={handleRandomFunction}>onClick event</Button>
        </>
    );
};

export default Functions;
