import { createContext, useContext, useState } from "react";

type I = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UiContext = createContext<I | null>(null);

export const UiProvider = ({ children }: React.PropsWithChildren) => {
    const [dark, setDark] = useState(false);

    return (
        <UiContext.Provider
            value={{
                dark,
                setDark,
            }}
        >
            {children}
        </UiContext.Provider>
    );
};

export const useUi = () => {
    const context = useContext(UiContext);

    if (!context) throw new Error("useUi must be used inside UiProvider");

    return context;
};
