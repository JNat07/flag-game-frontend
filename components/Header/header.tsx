import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import ThemeToggle from "../DarkMode/ThemeToggle";
import FlagGameText from "../FlagGameText";
import Image from "next/image";

const Header: React.FC = () => {
    const [pageLoaded, setPageLoaded] = React.useState<boolean>(false);
    const router = useRouter();

    React.useEffect(() => {
        setPageLoaded(true);
    }, []);

    return (
        <div className="m-0">
            <header className="prose relative inset-x-0 top-0 z-20 prose-h3:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
                <div className="grid w-screen grid-cols-3 px-2 py-2 lg:py-4 lg:px-5">
                    <ThemeToggle pageLoaded={pageLoaded} />
                    <div /> {/* middle col empty */}
                    <div className="flex justify-end">
                        <AnimatePresence>
                            {/* only show home button when not on menu */}
                            {router.pathname === "/" ? (
                                <motion.a
                                    href="https://github.com/JNat07"
                                    whileHover={{ scale: 0.95 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image
                                        src="/GitHubLogo.png"
                                        width={40}
                                        height={40}
                                        className="dark:invert"
                                        alt="someInfo"
                                    />
                                </motion.a>
                            ) : (
                                <motion.div
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex space-x-1 text-sm "
                                >
                                    <p className="pt-1 text-center">Exit</p>
                                    <Link href={"/"} passHref>
                                        <a>
                                            <HomeIcon className="h-6 w-6" />
                                        </a>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <FlagGameText />
                </div>
            </header>
        </div>
    );
};

export default Header;
