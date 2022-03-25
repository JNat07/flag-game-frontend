import * as React from "react";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const Background: React.FC = () => {
    // Returns a random integer from 1 to 10:
    const RandomNumber = (min: number, max: number): number =>
        Math.floor(Math.random() * max) + min;

    const imageMoveVarient: Variants = {
        animateRight: {
            x: ["120vw", "-20vw", "120vw"],
        },

        animateLeft: {
            x: ["-40vw", "110vw", "-40vw"],
        },
    };

    return (
        <div className="absolute w-screen space-y-5 overflow-hidden blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/de.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/cm.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/vc.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/hk.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(7, 17),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/bd.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(16, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/cl.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/us.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/cc.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/ht.png"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
        </div>
    );
};

export default Background;
