import * as React from "react";
import { motion } from "framer-motion";
import { chooseNameProps } from "../types";
import { names } from "../randomInfo";
import avatarGenerator from "../AvatarGenerator";
import Image from "next/image";

const ChooseName: React.FC<chooseNameProps> = ({
    HandleSetName,
    myInfo,
    setHasChooseName,
    setConnect,
}) => {
    const chooseNameHandler = (): void => {
        if (myInfo.myName.length === 0) return;
        setConnect(true);
        setHasChooseName(true);
    };

    const randomName = (): void => {
        const newName = names[Math.floor(Math.random() * names.length)];
        HandleSetName(newName);
    };

    return (
        <div className="relative  m-4 mt-[7vh]">
            <div className="flex justify-center lg:w-screen">
                <div className="p-4 prose rounded-lg shadow-inner prose-img:m-0 dark:prose-invert lg:px-10">
                    <div className="space-y-5 ">
                        <div className="mx-2 space-y-1">
                            <h2 className="m-0 text-3xl text-center">
                                Choose Your Name
                            </h2>
                            <hr className="dark:opacity-0" />
                        </div>

                        <div className="flex justify-center ">
                            <div className="space-y-4">
                                <div className="flex space-x-2">
                                    <img
                                        className="self-end w-16 h-16 rounded-lg bg-slate-600/80 selection:bg-transparent dark:bg-slate-600 dark:opacity-90"
                                        src={avatarGenerator(myInfo.myName)}
                                        alt="name_icon"
                                    />

                                    <div className="flex space-x-1 self-end rounded-md bg-gray-200 py-0.5 pl-1 dark:bg-gray-300 dark:ring-gray-100">
                                        <motion.svg
                                            onClick={() => randomName()}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="self-center w-8 h-8 section:bg-transparent dark:invert"
                                            whileTap={{ scale: 0.9 }}
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                                            />
                                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                        </motion.svg>

                                        <input
                                            onChange={(e) =>
                                                HandleSetName(e.target.value)
                                            }
                                            placeholder="Username"
                                            className=" w-full self-end border-l-2 border-black border-transparent bg-gray-200 px-2  py-1.5 pr-1 text-xl outline-0 dark:bg-gray-300  dark:text-black"
                                            value={myInfo.myName}
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    whileTap={
                                        myInfo.myName === ""
                                            ? { scale: 1 }
                                            : { scale: 0.98 }
                                    }
                                    onClick={() => chooseNameHandler()}
                                    className={
                                        myInfo.myName !== ""
                                            ? "w-full rounded-md bg-blue-400 px-1.5 py-1 text-white shadow-md dark:bg-blue-500/90"
                                            : "w-full rounded-md bg-blue-500 py-1 px-1.5 text-white opacity-60 shadow-md"
                                    }
                                >
                                    Choose Name
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseName;
