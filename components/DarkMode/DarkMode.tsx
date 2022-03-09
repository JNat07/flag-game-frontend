import * as React from "react";
import { darkModeType } from "../types";

const DarkMode = (): darkModeType => {
    // Hold theme state
    const [theme, setTheme] = React.useState<string>("");

    // only run when first loaded
    React.useEffect(() => {
        // if theme is in localStorage, set to theme
        if ("theme" in localStorage) {
            setTheme(localStorage.theme);
        }

        // add event listener for OS light/dark
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

    // set localStorage
    localStorage.theme = theme;
};

export default DarkMode;
