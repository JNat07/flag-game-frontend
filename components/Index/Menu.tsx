import * as React from "react";
import type { NextPage } from "next";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { SocketContext } from "../../pages/_app";
import FlagGameText from "../FlagGameText";

const Menu: NextPage = () => {
    const [startGame, setStartGame] = React.useState<boolean>(false);

    return (
        <div className="overflow-y-hidden">
            <Background />
            <SocketContext.Consumer>
                {({ setConnect }) => (
                    <main className="relative z-20 flex h-full">
                        <div className="m-auto">
                            <FlagGameText />
                            <div className="prose mt-[35vh] h-fit rounded-lg prose-h1:m-0 dark:prose-invert dark:shadow-none">
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
                                                className="w-full px-16 text-3xl text-center no-underline rounded-md shadow-lg ring ring-gray-800 hover:ring-balck dark:ring-gray-50 dark:hover:ring-white/70"
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

const Background = () => {
    // Returns a random integer from 1 to 10:
    const RandomNumber = (min: number, max: number): number =>
        Math.floor(Math.random() * max) + min;

    const imageMoveVarient: Variants = {
        animateRight: {
            x: [500, -100, 700],
        },

        animateLeft: {
            x: [-400, 500, -300],
        },
    };

    return (
        <div className="absolute w-screen space-y-5 overflow-hidden blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/DE"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/CM"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/VC"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/HK"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(7, 17),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/BD"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/CL"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/US"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/CC"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/HT"
                className="h-16 rounded-md w-fit hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
        </div>
    );
};

export default Menu;
