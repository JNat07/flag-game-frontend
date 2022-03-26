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
        <div className="fixed top-2 left-0 w-screen space-y-7 overflow-hidden blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/de.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Germany_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/cm.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Cameroon_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/vc.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Saint_Vincent_And_The_Grenadines_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/hk.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(7, 17),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Hong_Kong_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/bd.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),

                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Bangladesh_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/cl.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
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
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="United_States_Of_America_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/eg.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Egypt_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/il.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Israel_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/cc.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="The_Cocos_Islands_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/ht.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    duration: RandomNumber(16, 20),
                    ease: [0.5, 0.5, 0.5, 0.5],
                    repeat: Infinity,
                }}
                alt="Haiti_Flag"
            />
        </div>
    );
};

export default Background;
