import * as React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocketContext } from "../../pages/_app";
import FlagGameText from "../FlagGameText";

const Menu: NextPage = () => {
    const [startGame, setStartGame] = React.useState<boolean>(false);
    return (
        <SocketContext.Consumer>
            {({ myInfo, playersReady, setConnect, HandleSetName }) => (
                <main className="flex h-screen">
                    <div className="m-auto">
                        <div className="p-8 px-16 mb-64 prose rounded-lg shadow-inner prose-h1:m-0 dark:prose-invert h-fit dark:shadow-none ">
                            <FlagGameText />
                            <div className="mt-12 space-y-5">
                                <div className="flex justify-center">
                                    <Link
                                        href={"/singlePlayer"}
                                        passHref
                                        as="/singleplayer"
                                    >
                                        <motion.a
                                            whileHover={{ scale: 0.98 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full text-center no-underline rounded-md shadow-md ring-2 ring-blue-500/30 hover:ring-blue-500/50 dark:ring-gray-50 dark:hover:ring-white/70"
                                            onClick={() => setStartGame(true)}
                                        >
                                            Single Payer
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
                                            className="w-full text-center no-underline rounded-md shadow-md ring-2 ring-blue-500/30 hover:ring-blue-500/50 dark:ring-gray-50 dark:hover:ring-white/70"
                                            onClick={() => {
                                                setConnect(true);
                                                setStartGame(true);
                                            }}
                                        >
                                            Multi-player
                                        </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </SocketContext.Consumer>
    );
};

export default Menu;
