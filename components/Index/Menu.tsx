import * as React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocketContext } from "../../pages/_app";
import Background from "./background";

const Menu: NextPage = () => {
    const [startGame, setStartGame] = React.useState<boolean>(false);

    return (
        <div className="overflow-y-hidden">
            <Background />
            <SocketContext.Consumer>
                {({ setConnect }) => (
                    <main className="relative z-20 flex h-full">
                        <div className="m-auto">
                            <div className="prose mt-[17vh] h-fit rounded-lg prose-h1:m-0 dark:prose-invert dark:shadow-none">
                                <div className="pb-1 mt-12 space-y-7">
                                    <div className="flex justify-center ">
                                        <Link
                                            href={"/singlePlayer"}
                                            passHref
                                            as="/singleplayer"
                                        >
                                            <motion.a
                                                whileHover={{ scale: 0.98 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-full px-16 text-3xl text-center no-underline rounded-md shadow-lg ring ring-black dark:ring-gray-50 dark:hover:ring-white/70"
                                                onClick={() =>
                                                    setStartGame(true)
                                                }
                                            >
                                                Single Player
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
                                                className="w-full px-16 text-3xl text-center no-underline rounded-md shadow-lg hover:ring-balck ring ring-gray-800 dark:ring-gray-50 dark:hover:ring-white/70"
                                                onClick={() => {
                                                    setConnect(true);
                                                    setStartGame(true);
                                                }}
                                            >
                                                Multi Player
                                            </motion.a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                )}
            </SocketContext.Consumer>
        </div>
    );
};

export default Menu;
