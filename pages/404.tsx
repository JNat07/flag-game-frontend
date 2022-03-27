import * as React from "react";
import Router from "next/router";
import { motion, Variants } from "framer-motion";

const fourOFour = () => {
    React.useEffect(() => {
        Router.push("/");
    }, []);

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const dot: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <div className="prose dark:prose-invert">
            <div className="w-screen">
                <motion.div
                    className=" mt-[20vh] flex justify-center"
                    variants={container}
                    initial={"hidden"}
                    animate={"show"}
                >
                    <h1 className="font-medium">404</h1>
                    <h1 className="mx-2 font-medium ">|</h1>
                    <h1 className="font-medium">Redirecting</h1>
                    <div className="ml-1 flex space-x-1">
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
    );
};

export default fourOFour;
