import { useEffect, useState } from "react";

const useLocalStorage = (
    key: string,
    initial: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [state, setState] = useState(() => localStorage.getItem(key) || initial);

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [state, key]);

    return [state, setState];
};

export default useLocalStorage;
