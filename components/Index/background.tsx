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
            x: ["-20vw", "110vw", "-20vw"],
        },
    };

    return (
        <div className="absolute w-screen space-y-5 overflow-hidden blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/DE"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/CM"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/VC"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/HK"
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
                src="https://countryflagsapi.com/png/BD"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/CL"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="https://countryflagsapi.com/png/US"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                alt="Country_Flag"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/CC"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="https://countryflagsapi.com/png/HT"
                className="w-auto h-16 rounded-md hover:shadow-2xl"
                transition={{
                    duration: RandomNumber(15, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Country_Flag"
            />
        </div>
    );
};

export default Background;
