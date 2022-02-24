import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    GlobeIcon,
    HomeIcon as HomeOutline,
    WifiIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { SocketInfo, ThemeContext } from "../pages/_app";

const Header: React.FC = () => {
    const [pageLoaded, setPageLoaded] = React.useState<boolean>();
    const router = useRouter();

    React.useEffect(() => {
        setPageLoaded(true);
    }, []);

    interface Props {
        theme: string;
        setTheme(value: string): void;
    }

    return (
        <SocketInfo.Consumer>
            {({ playersReady, setConnect }) => (
                <ThemeContext.Consumer>
                    {({ theme, setTheme }) => (
                        <header className="inset-x-0 top-0 grid grid-cols-3 p-2 prose bg-white dark:prose-invert prose-h3:m-0 prose-p:m-0 dark:bg-black">
                            <div>
                                {/* disable flickering of text */}
                                {pageLoaded && (
                                    <>
                                        <div
                                            onClick={() =>
                                                setTheme(
                                                    theme === "light"
                                                        ? "dark"
                                                        : "light"
                                                )
                                            }
                                            className="flex w-12 h-5 rounded-full justify-self-start ring-2 ring-black dark:ring-white "
                                        >
                                            <motion.div
                                                animate={
                                                    theme === "dark"
                                                        ? { x: 0 }
                                                        : { x: 28 }
                                                }
                                                initial={
                                                    theme === "dark"
                                                        ? { x: 0 }
                                                        : { x: 28 }
                                                }
                                                transition={{
                                                    ease: [0.25, 0.5, 0.75, 1],
                                                }}
                                            >
                                                <GlobeIcon className="w-5 h-5 stroke-black dark:stroke-white" />
                                            </motion.div>
                                        </div>

                                        <p className="text-black dark:text-white">
                                            {theme ? theme : "System"}
                                        </p>
                                    </>
                                )}
                            </div>
                            <div></div>
                            <div className="flex justify-end ">
                                <AnimatePresence>
                                    {router.pathname !== "/" && (
                                        <motion.div
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex space-x-1 text-sm "
                                            onClick={() =>
                                                router.pathname ===
                                                "/multiPlayer"
                                                    ? setConnect(false)
                                                    : null
                                            }
                                        >
                                            <p className="pt-1 text-center">
                                                Exit
                                            </p>
                                            <Link href={"/"} passHref>
                                                <a>
                                                    <HomeOutline className="w-6 h-6" />
                                                </a>
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </header>
                    )}
                </ThemeContext.Consumer>
            )}
        </SocketInfo.Consumer>
    );
};

export default Header;
