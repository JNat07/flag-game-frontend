import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art";
import { SocketInfo } from "./_app";

const MultiPlayer: React.FC = () => {
    const src = (elem: string) => {
        return createAvatar(style, {
            dataUri: true,
            seed: elem,
        });
    };

    return (
        <SocketInfo.Consumer>
            {({ playersReady, setConnect, myID }) => (
                <div className="px-2 prose dark:prose-invert prose-p:m-0 prose-h3:m-0">
                    <h2 className="text-center underline">
                        {playersReady.length >= 1
                            ? `Online Players : ${playersReady.length}`
                            : "Online Players"}
                    </h2>
                    <div className="grid items-center grid-cols-2 gap-y-2 gap-x-3">
                        {playersReady.length >= 1
                            ? playersReady.map((elem, index) => {
                                  if (myID !== elem)
                                      return (
                                          <motion.div
                                              whileHover={{
                                                  scale: 0.98,
                                              }}
                                              whileTap={{
                                                  scale: 0.98,
                                              }}
                                              className="w-full shadow-sm"
                                              key={index}
                                          >
                                              <div className="flex justify-center bg-gray-500 rounded-t-md dark:bg-gray-800">
                                                  <Image
                                                      className=""
                                                      loader={() => src(elem)}
                                                      src={src(elem)}
                                                      width={130}
                                                      height={130}
                                                      alt="icon"
                                                  />
                                              </div>

                                              <h3 className="text-center break-all bg-gray-300 rounded-b-md dark:bg-slate-700/90">
                                                  {elem}
                                              </h3>
                                          </motion.div>
                                      );
                              })
                            : "none"}
                    </div>
                </div>
            )}
        </SocketInfo.Consumer>
    );
};

export default MultiPlayer;
