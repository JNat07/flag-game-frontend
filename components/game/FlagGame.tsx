import * as React from "react";
import { motion } from "framer-motion";
import { FlagGameProps } from "../types";
import dynamic from "next/dynamic";
const CorrectNames = dynamic(() => import("./correctNames"), {
    ssr: false,
});

const FlagGame: React.FC<FlagGameProps> = ({
    gameData,
    handleChoose,
    countries,

    timeObj,
}) => {
    return (
        <div className="prose relative mx-2 mt-[7vh] rounded-md py-2 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert">
            <div className="lg:flex lg:w-screen lg:justify-center">
                <div className="rounded-lg pb-5 ring-2 ring-gray-800 dark:ring-gray-200 lg:w-[40vw]">
                    {/* info */}
                    <div className="grid grid-cols-3 rounded-t-lg bg-gray-200 py-0.5 px-4 dark:bg-gray-600">
                        <h4>Score: {gameData.score}</h4>
                        <div />

                        <p className="m-0 place-self-end font-mono dark:text-white ">
                            {/* time not initialized, then set to 00:00 (page load not complete) */}
                            {timeObj.time
                                ? (timeObj.minutes < 10
                                      ? "0" + timeObj.minutes
                                      : timeObj.minutes) +
                                  ":" +
                                  (timeObj.seconds < 10
                                      ? "0" + timeObj.seconds
                                      : timeObj.seconds)
                                : "00:00"}
                        </p>
                    </div>
                    <h3 className="break-words px-1 pt-4 text-center">
                        Which is {countries[gameData.question]}?
                    </h3>
                    {/* Flags */}
                    <div className="mt-5 grid h-fit grid-cols-2 place-items-center gap-x-4  px-1.5">
                        {gameData.current[0] !== "" &&
                            gameData.current[1] !== "" && (
                                <>
                                    <motion.img
                                        whileTap={{ scale: 0.96 }}
                                        whileHover={{ scale: 0.98 }}
                                        src={`./png250px/${gameData.current[0]}.png`}
                                        className="m-0 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
                                        onClick={() =>
                                            handleChoose(gameData.current[0])
                                        }
                                        alt="Country_Flag_1"
                                    />

                                    <motion.img
                                        whileTap={{ scale: 0.96 }}
                                        whileHover={{ scale: 0.98 }}
                                        className="m-0 cursor-pointer rounded-lg shadow-md hover:shadow-lg"
                                        src={`./png250px/${gameData.current[1]}.png`}
                                        onClick={() =>
                                            handleChoose(gameData.current[1])
                                        }
                                        alt="Country_Flag_2"
                                    />
                                </>
                            )}
                    </div>
                    <div className="mt-4">
                        <CorrectNames
                            recentWrong={gameData.recentWrong}
                            question={gameData.question}
                            current={gameData.current}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlagGame;
