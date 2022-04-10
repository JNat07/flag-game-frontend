import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";
import { ChoosePlayerProps } from "../types";
import Image from "next/image";

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
        <div className="prose mt-[5vh] px-2 prose-h3:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
            <h2 className="text-center underline">
                {playersReady.length >= 1
                    ? `Online Players : ${playersReady.length}`
                    : "Online Players"}
            </h2>
            <div className="grid grid-cols-2 items-center gap-y-2 gap-x-3">
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
                                      className="cursor-pointer rounded-md ring-1 ring-black dark:ring-gray-400"
                                  >
                                      <motion.div
                                          whileTap={{
                                              scale: 0.95,
                                          }}
                                          className="w-full shadow-sm"
                                      >
                                          <div className="rounded-t-md bg-gray-500 selection:bg-transparent dark:bg-gray-800">
                                              <AnimatePresence>
                                                  {whoIwantToPlay === id && (
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
                                                          className="overflow-hidden rounded-t-md bg-orange-600 pl-1 "
                                                      >
                                                          <p className="text-center text-base text-white">
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
                                                          className="overflow-hidden rounded-t-md bg-green-600 pl-1 "
                                                      >
                                                          <p className="text-center text-base text-white">
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
                                              <h3 className="break-all rounded-b-md bg-gray-300 text-center selection:bg-transparent dark:bg-slate-700/90">
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
    );
};

export default ChoosePlayer;
