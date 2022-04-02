import * as React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { UserIcon, UsersIcon } from "@heroicons/react/outline";
import Background from "./background";

const Menu: NextPage = () => {
    return (
        <div className="fixed left-0 w-screen h-screen bg-center top-1 ">
            <Background />
            <main className="relative z-20 flex">
                <div className="m-auto">
                    <div className=" prose mt-[34vh]  rotate-[-2deg] rounded-sm bg-gradient-to-b from-[#FFFF88] to-[#c0c066] px-2 pb-4 pt-2 shadow-2xl ring-1 ring-gray-800 prose-h1:m-0 prose-h4:m-0 lg:h-[28vh] lg:w-[28vw] ">
                        <div className="p-3 space-y-7">
                            <div className="flex justify-center">
                                <Link
                                    href={"/singlePlayer"}
                                    passHref
                                    as="/singleplayer"
                                >
                                    <a
                                        className="no-underline rounded-md select-none"
                                        style={{
                                            fontFamily: "Reenie Beanie",
                                        }}
                                    >
                                        <motion.div
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center justify-center space-x-1 lg:space-x-2"
                                        >
                                            <UserIcon className="mb-1.5 h-8 w-8 lg:h-14 lg:w-14" />
                                            <h4 className="text-3xl ine hover:underline lg:text-7xl">
                                                Singleplayer
                                            </h4>
                                        </motion.div>
                                    </a>
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    href={"/multiPlayer"}
                                    as="/multiplayer"
                                    passHref
                                >
                                    <a
                                        className="no-underline rounded-md select-none"
                                        style={{
                                            fontFamily: "Reenie Beanie",
                                        }}
                                    >
                                        <motion.div
                                            whileTap={{
                                                scale: 0.97,
                                            }}
                                            className="flex items-center justify-center space-x-2 lg:space-x-4"
                                        >
                                            <UsersIcon className="mb-1.5 h-8 w-8 lg:h-14 lg:w-14" />
                                            <h4 className="text-3xl hover:underline lg:text-7xl">
                                                Multiplayer
                                            </h4>
                                        </motion.div>
                                    </a>
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
