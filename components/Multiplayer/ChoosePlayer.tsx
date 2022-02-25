import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";
import { playReadyType } from "../socketio/socketio";
import { GameContext } from "../../pages/_app";

interface Props {
    playersReady: playReadyType[];
    myInfo: { myID: string; myName: string };
}

const ChoosePlayer: React.FC<Props> = ({ playersReady, myInfo }) => {
    const src = (elem: string) => {
        return createAvatar(style, {
            dataUri: true,
            seed: elem,
        });
    };

    return (
        <GameContext.Consumer>
            {({ opponentHandler, whoWantsToPlay }) => (
                <div className="px-2 prose dark:prose-invert prose-p:m-0 prose-h3:m-0">
                    <h2 className="text-center underline">
                        {playersReady.length >= 1
                            ? `Online Players : ${playersReady.length}`
                            : "Online Players"}
                    </h2>
                    <div className="grid items-center grid-cols-2 gap-y-2 gap-x-3">
                        {playersReady.length >= 1
                            ? playersReady.map((elem, index) => {
                                  const { name, socketId } = elem;
                                  if (myInfo.myID !== socketId)
                                      return (
                                          <div
                                              onClick={() =>
                                                  opponentHandler(socketId)
                                              }
                                              key={index}
                                              className="rounded-md ring-1 ring-black dark:ring-gray-400"
                                          >
                                              <motion.div
                                                  whileTap={{
                                                      scale: 0.95,
                                                  }}
                                                  className="w-full shadow-sm"
                                              >
                                                  <div className="bg-gray-500 rounded-t-md selection:bg-transparent dark:bg-gray-800">
                                                      <AnimatePresence>
                                                          {whoWantsToPlay ===
                                                              socketId && (
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
                                                      <div className="flex justify-center">
                                                          <Image
                                                              className=""
                                                              loader={() =>
                                                                  src(name)
                                                              }
                                                              src={src(name)}
                                                              width={130}
                                                              height={130}
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
            )}
        </GameContext.Consumer>
    );
};

export default ChoosePlayer;
