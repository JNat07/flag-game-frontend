import * as React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserIcon, UsersIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
const Background = dynamic(() => import("./background"), {
    ssr: false,
});

const Menu: NextPage = () => {
    return (
        <div>
            <Background />
            <main className="relative z-20 flex">
                <div className="m-auto">
                    <div className="prose mt-[17vh] h-fit rounded-lg prose-h1:m-0 prose-h4:m-0 dark:prose-invert dark:shadow-none">
                        <div className="mt-12 space-y-7 pb-1">
                            <div className="flex justify-center ">
                                <Link
                                    href={"/singlePlayer"}
                                    passHref
                                    as="/singleplayer"
                                >
                                    <motion.a
                                        whileHover={{ scale: 0.98 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex w-full select-none items-center space-x-3 rounded-md px-16 pl-12 text-center text-3xl no-underline shadow-md ring ring-gray-800 hover:shadow-lg hover:ring-black dark:ring-gray-50 dark:hover:ring-white/70"
                                    >
                                        <UserIcon className="h-8 w-8" />
                                        <h4> Single Player</h4>
                                    </motion.a>
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    href={"/multiPlayer"}
                                    as="/multiplayer"
                                    passHref
                                >
                                    <motion.a
                                        whileHover={{ scale: 0.98 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex w-full select-none items-center space-x-3 rounded-md px-16 pl-12 text-center text-3xl no-underline shadow-md ring ring-gray-800 hover:shadow-lg hover:ring-black dark:ring-gray-50 dark:hover:ring-white/70"
                                    >
                                        <UsersIcon className="h-8 w-8" />
                                        <h4>Multi Player</h4>
                                    </motion.a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Menu;
