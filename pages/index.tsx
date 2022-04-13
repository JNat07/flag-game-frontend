import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserIcon, UsersIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
    return (
        <main>
            {/* inject elem into page **/}
            <Head>
                <title>The Flag Game</title>
                <meta name="The flag game" content="Built using NextJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* main game menu */}
            <div className="fixed top-0 left-0 w-screen">
                <main className="relative z-20 flex top-1">
                    <div className="m-auto">
                        <div className="prose mt-[34vh] px-2 pb-4 pt-2 prose-h1:m-0 prose-h4:m-0">
                            <div className="z-40 p-3 space-y-7">
                                <div className="flex justify-center">
                                    <Link href={"/singlePlayer"} passHref>
                                        <motion.a
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center justify-center space-x-1 no-underline lg:space-x-2"
                                        >
                                            <UserIcon className="mb-1.5 h-8 w-8 text-black dark:text-white lg:h-14 lg:w-14" />

                                            <h4 className="text-3xl text-black dark:text-white">
                                                Singleplayer
                                            </h4>
                                        </motion.a>
                                    </Link>
                                </div>
                                <div className="flex justify-center">
                                    <Link href={"/multiPlayer"} passHref>
                                        <motion.a
                                            whileTap={{
                                                scale: 0.97,
                                            }}
                                            className="flex items-center justify-center space-x-2 no-underline lg:space-x-4"
                                        >
                                            <UsersIcon className="mb-1.5 h-8 w-8 text-black dark:text-white lg:h-14 lg:w-14" />
                                            <h4 className="text-3xl text-black dark:text-white">
                                                Multiplayer
                                            </h4>
                                        </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </main>
    );
};

export default Home;
