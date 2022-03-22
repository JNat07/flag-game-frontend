import * as React from "react";
import { darkModeType } from "../types";

const DarkMode = (): darkModeType => {
    // Hold theme state and default as light
    const [theme, setTheme] = React.useState<string>("light");

    // only run when first loaded
    React.useEffect(() => {
        // test when render, if OS dark mode
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme("dark");
        }

        // add event listener for OS light/dark to change when OS changes
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                setTheme(event.matches ? "dark" : "light");
            });
    }, []);

    // whenever theme changes, alter DOM
    React.useEffect(() => {
        themeHandler(theme);
    }, [theme]);

    return { theme, setTheme };
};

const themeHandler = (theme: string): void => {
    // if theme is set to dark, or there is no theme in local-storage and the OS is dark, add dark. Else, remove dark (light).
    theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
};

export default DarkMode;
