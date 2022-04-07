import * as React from "react";
import type { NextPage } from "next";
import { motion, Variants } from "framer-motion";
import { UserIcon, UsersIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Menu: NextPage = () => {
    interface Props {
        runAnimation: boolean;
        endAnimation: boolean;
        whereToSend: string;
    }
    const [click, setClick] = React.useState<Props>({
        runAnimation: false,
        endAnimation: false,
        whereToSend: "",
    });

    const router = useRouter();

    const variants: Variants = {
        animateVoid: {
            scale: 100,
            transition: {
                duration: 1.5,
            },
        },
        spotlight: {
            x: [25, 0, -25, 0, 25],
            y: [-20, -10, -5, -10, -20],

            transition: {
                repeat: Infinity,
                duration: 10,
            },
        },
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-center">
            <div className="absolute right-3">
                <div className="h-[40vh] w-2 rounded-full bg-[#654321]" />
            </div>
            <main className="relative z-20 flex top-1">
                <div className="m-auto">
                    <div className="prose mt-[34vh] px-2 pb-4 pt-2 prose-h1:m-0 prose-h4:m-0">
                        <div className="relative z-0">
                            <motion.div
                                variants={variants}
                                className={
                                    click.runAnimation
                                        ? "absolute h-48 w-48 rounded-full bg-black opacity-100"
                                        : "absolute h-48 w-48 rounded-full bg-gradient-to-r from-yellow-500  to-yellow-300 opacity-[0.35]"
                                }
                                animate={
                                    click.runAnimation
                                        ? "animateVoid"
                                        : "spotlight"
                                }
                                onAnimationComplete={(definition) =>
                                    definition === "animateVoid"
                                        ? router.push(click.whereToSend)
                                        : null
                                }
                            />
                        </div>
                        <div className="z-40 p-3 space-y-7">
                            <div className="flex justify-center">
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center justify-center space-x-1 lg:space-x-2"
                                    onClick={() =>
                                        setClick({
                                            runAnimation: true,
                                            endAnimation: false,
                                            whereToSend: "/singlePlayer",
                                        })
                                    }
                                >
                                    <UserIcon className="mb-1.5 h-8 w-8 text-black dark:text-white lg:h-14 lg:w-14" />

                                    <h4 className="text-3xl text-black dark:text-white">
                                        Singleplayer
                                    </h4>
                                </motion.div>
                            </div>
                            <div className="flex justify-center">
                                <motion.div
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="flex items-center justify-center space-x-2 lg:space-x-4"
                                    onClick={() =>
                                        setClick({
                                            runAnimation: true,
                                            endAnimation: false,
                                            whereToSend: "/multiplayer",
                                        })
                                    }
                                >
                                    <UsersIcon className="mb-1.5 h-8 w-8 text-black dark:text-white lg:h-14 lg:w-14" />
                                    <h4 className="text-3xl text-black dark:text-white">
                                        Multiplayer
                                    </h4>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Menu;
