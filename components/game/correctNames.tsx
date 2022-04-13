import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { countries } from "../flagInfo/FlagInfo";
import { CorrectNamesType } from "../types";

const CorrectNames: React.FC<CorrectNamesType> = ({
    recentWrong,
    current,
    question,
}) => {
    return (
        <AnimatePresence>
            {recentWrong && (
                <motion.div
                    exit={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    initial={{ height: 0, opacity: 0 }}
                >
                    <div className="grid grid-cols-2 place-items-center px-1.5">
                        <h3
                            className={
                                current[0] === question
                                    ? "text-center text-green-500 dark:text-green-600"
                                    : "text-center text-red-400 dark:text-red-600"
                            }
                        >
                            {countries[current[0]].replace(/['"]+/g, "")}
                        </h3>

                        <h3
                            className={
                                current[1] === question
                                    ? "text-center text-green-500 dark:text-green-600"
                                    : "text-center text-red-400 dark:text-red-600"
                            }
                        >
                            {countries[current[1]].replace(/['"]+/g, "")}
                        </h3>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CorrectNames;
