import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import ThemeToggle from "../DarkMode/ThemeToggle";
import FlagGameText from "../FlagGameText";

const Header: React.FC = () => {
    const [pageLoaded, setPageLoaded] = React.useState<boolean>(false);
    const router = useRouter();

    React.useEffect(() => {
        setPageLoaded(true);
    }, []);

    return (
        <div className="m-0">
            <header className="relative inset-x-0 top-0 z-20 prose prose-h3:m-0 prose-p:m-0 prose-img:m-0 ">
                <div className="grid w-screen grid-cols-3 px-2 py-2 lg:py-4 lg:px-5">
                    <ThemeToggle pageLoaded={pageLoaded} />
                    <div /> {/* middle col empty */}
                    <div className="flex justify-end">
                        {/* only show home button when not on menu */}
                        {router.pathname === "/" ? null : (
                            <AnimatePresence>
                                <motion.div
                                    whileTap={{ scale: 0.95 }}
                                    className="flex space-x-1 text-sm "
                                    exit={{ opacity: 0 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <p className="pt-1 text-center text-white lg:self-end lg:text-3xl">
                                        Home
                                    </p>
                                    <Link href={"/"} passHref>
                                        <a>
                                            <HomeIcon className="w-6 h-6 stroke-white lg:h-12 lg:w-12 " />
                                        </a>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                    <FlagGameText />
                    <div></div>
                </div>
            </header>
        </div>
    );
};

export default Header;
