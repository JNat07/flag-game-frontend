import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon as HomeOutline } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { SocketContext } from "../pages/_app";
import ThemeToggle from "./DarkMode/ThemeToggle";

const Header: React.FC = () => {
    const [pageLoaded, setPageLoaded] = React.useState<boolean>(false);
    const router = useRouter();

    React.useEffect(() => {
        setPageLoaded(true);
    }, []);

    return (
        <SocketContext.Consumer>
            {({ playersReady, setConnect }) => (
                <header className="inset-x-0 top-0 grid grid-cols-3 p-2 prose dark:prose-invert prose-h3:m-0 prose-p:m-0 ">
                    <ThemeToggle pageLoaded={pageLoaded} />
                    <div /> {/* middle col empty */}
                    <div className="flex justify-end">
                        <AnimatePresence>
                            {/* only show home button when not on menu */}
                            {router.pathname !== "/" && (
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex space-x-1 text-sm "
                                    onClick={() =>
                                        // if on multiPlayer page, set connect false
                                        router.pathname === "/multiPlayer"
                                            ? setConnect(false)
                                            : null
                                    }
                                >
                                    <p className="pt-1 text-center">Exit</p>
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
        </SocketContext.Consumer>
    );
};

export default Header;
