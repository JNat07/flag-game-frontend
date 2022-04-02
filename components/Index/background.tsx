import * as React from "react";
import { motion } from "framer-motion";

const Background: React.FC = () => {
    return (
        <div className="fixed w-screen h-screen">
            <div className="my-4 grid grid-cols-3 gap-y-[15vh] px-2 lg:gap-y-[20vh]  lg:p-4">
                <div />
                <div className="lg:hidden" />

                <div className="relative right-10 top-8">
                    <div className="absolute left-14 -top-3.5 lg:left-20">
                        <div className="absolute z-20 w-3 h-3 rounded-full shadow-md bg-gradient-to-r from-red-400 to-yellow-600" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>
                    <img
                        src="./png250px/de.png"
                        className="relative z-0 h-20 w-auto rounded-md opacity-[85] shadow-sm shadow-yellow-500 dark:shadow-lg dark:shadow-yellow-500 lg:h-28"
                        alt="Germany_Flag"
                    />
                </div>

                <div className="relative">
                    <div className="absolute left-14 -top-3.5 lg:left-20">
                        <div className="absolute z-20 w-3 h-3 rounded-full shadow-md bg-gradient-to-r from-yellow-400 to-yellow-500" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>
                    <div />
                    <motion.img
                        animate={{ rotate: [-10, 10, -10] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        src="./png250px/do.png"
                        className="relative z-0 h-20 origin-top rounded-lg shadow-sm opacity-90 shadow-red-500 dark:shadow-lg dark:shadow-red-500 lg:h-28"
                        alt="Dominican_Republic_Flag"
                    />
                </div>

                <div className="lg:hidden" />

                <div className="lg:hidden" />

                <div className="relative mt-10 ml-5 lg:place-self-end">
                    <div className="absolute left-14 -top-3.5 lg:left-20">
                        <div className="absolute z-20 w-3 h-3 rounded-full shadow-md bg-gradient-to-r from-blue-400 to-blue-500" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>
                    <img
                        src="./png250px/gs.png"
                        className="relative z-0 h-20 rounded-lg shadow-sm opacity-90 shadow-blue-700 dark:shadow-lg dark:shadow-blue-700 lg:h-28"
                        alt="South_Georgia_And_The_South_Sandwich_Islands_Flag"
                    />
                </div>

                <div />

                <div className="relative -rotate-6 lg:place-self-end">
                    <div className="absolute left-14 -top-3.5 lg:left-20">
                        <div className="absolute z-20 w-3 h-3 rounded-full shadow-md bg-gradient-to-r from-red-400 to-red-500" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>

                    <img
                        src="./png250px/ht.png"
                        className="relative z-0 h-20 origin-top rounded-lg shadow-sm opacity-90 shadow-red-500 dark:shadow-lg dark:shadow-red-500 lg:h-28"
                        alt="Haiti_flag"
                    />
                </div>

                <div className="relative -rotate-6 lg:place-self-center">
                    <div className="absolute left-14 -top-3.5 lg:-top-3 lg:left-24">
                        <div className="absolute z-20 w-3 h-3 rounded-full shadow-md bg-gradient-to-r from-red-400 to-red-500" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>

                    <motion.img
                        whileTap={{ rotate: [0, 360] }}
                        transition={{
                            duration: 3,
                        }}
                        src="./png250px/us.png"
                        className="relative z-0 h-20 origin-top rounded-lg shadow-sm opacity-90 shadow-red-500 dark:shadow-lg dark:shadow-red-500 lg:h-28"
                        alt="USA_flag"
                    />
                </div>

                <div />

                <div className="relative">
                    <div className="absolute left-14 -top-3.5 lg:left-20">
                        <div className="absolute z-20 w-3 h-3 bg-white rounded-full shadow-md" />
                        <div className="absolute left-[0.3rem] top-2 h-4 w-[0.1rem] rotate-[10deg] rounded-full bg-gray-100" />
                    </div>

                    <img
                        src="./png250px/hk.png"
                        className="relative z-0 h-20 origin-top rounded-lg shadow-sm rotate-12 opacity-90 shadow-red-300 dark:shadow-md dark:shadow-red-300 lg:h-28"
                        alt="Hong_Kong_Flag"
                    />
                </div>
            </div>
        </div>
    );
};

export default Background;
