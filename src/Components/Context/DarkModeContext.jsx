import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useLocalStorage(
        "isDarkMode",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    )
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error("DarkModeContext was used outside of DarkModeProvider");
    return context
}
