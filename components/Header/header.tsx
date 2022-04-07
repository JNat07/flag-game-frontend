import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/outline";
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
        <header className="relative inset-x-0 top-0 z-20 prose prose-h3:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
            <div className="grid w-screen grid-cols-3 px-2 pt-3">
                {/* only show home button when not on menu */}
                {router.pathname === "/" ? (
                    <FlagGameText />
                ) : (
                    <AnimatePresence>
                        <Link href={"/"} passHref>
                            <motion.a whileTap={{ scale: 0.8 }}>
                                <ChevronLeftIcon className="w-6 h-6 lg:h-8 lg:w-8 " />
                            </motion.a>
                        </Link>
                    </AnimatePresence>
                )}
                <div /> {/* middle col empty */}
                <div className="justify-self-end">
                    <ThemeToggle pageLoaded={pageLoaded} />
                </div>
            </div>
        </header>
    );
};

export default Header;
