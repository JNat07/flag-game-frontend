import * as React from "react";
import { motion, Variants } from "framer-motion";

const Loading: React.FC<{ redirecting?: boolean }> = ({
    redirecting = false,
}) => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const dot: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { repeat: Infinity, duration: 0.75 } },
    };

    return (
        <div className="prose prose-h1:m-0 prose-h2:m-0 dark:prose-invert">
            <div className="mt-[30vh]">
                <div className="m-auto">
                    <motion.div
                        className="flex justify-center"
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                    >
                        <h1 className="font-medium ">
                            {redirecting ? "Redirecting" : "Loading"}
                        </h1>
                        <div className="flex ml-1 space-x-1">
                            <motion.h1 className="font-medium" variants={dot}>
                                .
                            </motion.h1>
                            <motion.h1 className="font-medium" variants={dot}>
                                .
                            </motion.h1>
                            <motion.h1 className="font-medium" variants={dot}>
                                .
                            </motion.h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
