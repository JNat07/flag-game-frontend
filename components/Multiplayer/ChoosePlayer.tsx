import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";
import { ChoosePlayerProps } from "../types";
import Image from "next/image";
import Head from "next/head";

const ChoosePlayer: React.FC<ChoosePlayerProps> = ({
    playersReady,
    myInfo,
    opponentHandler,
    whoIwantToPlay,
    whoRequestMe,
}) => {
    const src = (elem: string) => {
        return createAvatar(style, {
            dataUri: true,
            seed: elem,
        });
    };

    return (
        <>
            <Head>
                <title>The Flag Game | Chooser Opponent</title>
            </Head>
            <div className="prose mt-[5vh] px-2 prose-h3:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
                <h2 className="text-center underline">
                    {playersReady.length >= 1
                        ? `Online Players : ${playersReady.length}`
                        : "Online Players"}
                </h2>
                <div className="grid items-center grid-cols-2 gap-y-2 gap-x-3">
                    {playersReady.length >= 1
                        ? playersReady.map((elem, index) => {
                              const { name, id } = elem;

                              if (myInfo.myID !== id)
                                  return (
                                      <div
                                          onClick={() =>
                                              opponentHandler(id, myInfo.myID)
                                          }
                                          key={index}
                                          className="rounded-md cursor-pointer ring-1 ring-black dark:ring-gray-400"
                                      >
                                          <motion.div
                                              whileTap={{
                                                  scale: 0.95,
                                              }}
                                              className="w-full shadow-sm"
                                          >
                                              <div className="bg-gray-500 rounded-t-md selection:bg-transparent dark:bg-gray-800">
                                                  <AnimatePresence>
                                                      {whoIwantToPlay ===
                                                          id && (
                                                          <motion.div
                                                              animate={{
                                                                  height: "auto",
                                                                  opacity: 1,
                                                              }}
                                                              initial={{
                                                                  height: 0,
                                                                  opacity: 0,
                                                              }}
                                                              exit={{
                                                                  height: 0,
                                                                  opacity: 0,
                                                              }}
                                                              className="pl-1 overflow-hidden bg-orange-600 rounded-t-md "
                                                          >
                                                              <p className="text-base text-center text-white">
                                                                  Requested
                                                              </p>
                                                          </motion.div>
                                                      )}
                                                  </AnimatePresence>

                                                  <AnimatePresence>
                                                      {whoRequestMe.includes(
                                                          id
                                                      ) && (
                                                          <motion.div
                                                              animate={{
                                                                  height: "auto",
                                                                  opacity: 1,
                                                              }}
                                                              initial={{
                                                                  height: 0,
                                                                  opacity: 0,
                                                              }}
                                                              exit={{
                                                                  height: 0,
                                                                  opacity: 0,
                                                              }}
                                                              className="pl-1 overflow-hidden bg-green-600 rounded-t-md "
                                                          >
                                                              <p className="text-base text-center text-white">
                                                                  Requesting You
                                                              </p>
                                                          </motion.div>
                                                      )}
                                                  </AnimatePresence>

                                                  <div className="flex justify-center">
                                                      <Image
                                                          src={src(name)}
                                                          width={120}
                                                          height={120}
                                                          alt="icon"
                                                      />
                                                  </div>
                                              </div>

                                              <div>
                                                  <h3 className="text-center break-all bg-gray-300 rounded-b-md selection:bg-transparent dark:bg-slate-700/90">
                                                      {name}
                                                  </h3>
                                              </div>
                                          </motion.div>
                                      </div>
                                  );
                          })
                        : "none"}
                </div>
            </div>
        </>
    );
};

export default ChoosePlayer;
