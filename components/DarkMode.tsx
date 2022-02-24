import * as React from "react";

const DarkMode = () => {
    // Hold theme state
    const [theme, setTheme] = React.useState<string>("");

    // only run when first loaded
    React.useEffect(() => {
        themeHandler(theme);
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

const themeHandler = (theme: string) => {
    // if theme is set to dark, or there is no theme in local-storage and the OS is dark, add dark. Else, remove dark (light).
    theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
};

export default DarkMode;
