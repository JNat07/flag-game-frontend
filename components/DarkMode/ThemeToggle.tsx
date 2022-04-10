import * as React from "react";
import { motion, Variants } from "framer-motion";
import { GlobeIcon } from "@heroicons/react/outline";
import { ThemeToggleType } from "../types";
import DarkMode from "./DarkMode";

const ThemeToggle: React.FC<ThemeToggleType> = ({ pageLoaded }) => {
    const themeToggleVar: Variants = {
        dark: {
            x: "55%",
        },
        light: {
            x: "0%",
        },
    };

    const themeLabelVarient: Variants = {
        dark: {
            opacity: [1, 0.6, 1],
        },
        light: {
            opacity: [1, 0.6, 1],
        },
    };

    const { theme, setTheme } = DarkMode();

    return (
        /* disable flickering of text */
        pageLoaded ? (
            // consume theme and settheme

            <>
                <div
                    id="globe"
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="h-5 w-12 rounded-full ring-2 ring-black dark:ring-white lg:h-7 lg:w-16"
                >
                    {/* animate the globe icon moving */}
                    <motion.div
                        variants={themeToggleVar}
                        animate={theme}
                        initial={theme}
                        transition={{
                            ease: [0.25, 0.5, 0.75, 1],
                        }}
                    >
                        <GlobeIcon className="absolute h-5 w-5 cursor-pointer stroke-black dark:stroke-white lg:h-7 lg:w-7" />
                    </motion.div>
                </div>

                <motion.p
                    className="cursor-default text-black selection:bg-transparent dark:text-gray-200 lg:text-xl"
                    variants={themeLabelVarient}
                    animate={theme}
                    initial={{ opacity: 1 }}
                >
                    {/*  theme initialized, else know OS preference */}
                    {theme ? theme : "System"}
                </motion.p>
            </>
        ) : null
    );
};

export default ThemeToggle;
