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
            opacity: 1,
        },

        animateLeft: {
            x: ["-40vw", "110vw", "-40vw"],
            opacity: 1,
        },
    };

    return (
        <div className="fixed top-6 left-0 w-screen space-y-7 overflow-hidden blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/de.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Germany_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/cm.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Cameroon_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/vc.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Saint_Vincent_And_The_Grenadines_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/hk.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Hong_Kong_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/bd.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Bangladesh_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/cl.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Chile_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/us.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="United_States_Of_America_Flag"
            />
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./MenuFlags/eg.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Egypt_Flag"
            />

            <motion.img
                variants={imageMoveVarient}
                animate={"animateRight"}
                src="./MenuFlags/il.png"
                className="w-auto h-16 rounded-md hover:shadow-md"
                transition={{
                    x: {
                        duration: RandomNumber(16, 20),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="Israel_Flag"
            />

            <div className="hidden md:inline">
                <motion.img
                    variants={imageMoveVarient}
                    animate={"animateLeft"}
                    src="./MenuFlags/cc.png"
                    className="w-auto h-16 rounded-md hover:shadow-md"
                    transition={{
                        x: {
                            duration: RandomNumber(16, 20),
                            ease: [0.5, 0.5, 0.5, 0.5],
                            repeat: Infinity,
                        },
                    }}
                    initial={{ opacity: 0 }}
                    alt="The_Cocos_Islands_Flag"
                />

                <motion.img
                    variants={imageMoveVarient}
                    animate={"animateRight"}
                    src="./MenuFlags/ht.png"
                    className="w-auto h-16 rounded-md hover:shadow-md"
                    transition={{
                        x: {
                            duration: RandomNumber(16, 20),
                            ease: [0.5, 0.5, 0.5, 0.5],
                            repeat: Infinity,
                        },
                    }}
                    initial={{ opacity: 0 }}
                    alt="Haiti_Flag"
                />
            </div>
        </div>
    );
};

export default Background;
