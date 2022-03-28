import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import DarkMode from "../components/DarkMode/DarkMode";

// theme context
export const ThemeContext = React.createContext({
    theme: "placeholder",
    setTheme: (string: string) => {},
});

// game context
export const GameContext = React.createContext({
    opponentHandler: (value: string, myID: string) => {},
    whoIwantToPlay: "",
    whoRequestMe: [""],
});

function MyApp({ Component, pageProps }: AppProps) {
    const { theme, setTheme } = DarkMode();

    return (
        // wrap everything inside of contexts to be used later
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="h-screen overflow-hidden bg-white dark:bg-black">
                {/* render header component and all other components */}
                <Header />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    );
}

export default MyApp;
