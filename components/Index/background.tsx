import * as React from "react";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const Background: React.FC = () => {
    const [dimensions, setDimensions] = React.useState<number[]>([0, 0]);

    React.useEffect(() => {
        setDimensions([window.innerHeight, window.innerWidth]);

        window.addEventListener("resize", function (event) {
            setDimensions([window.innerHeight, window.innerWidth]);
        });
    }, []);

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

    return dimensions[0] && dimensions[1] ? (
        <div className="fixed top-6 left-0 w-screen space-y-7  blur-[5px]">
            <motion.img
                variants={imageMoveVarient}
                animate={"animateLeft"}
                src="./png250px/de.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/cm.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/vc.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/hk.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/bd.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/cl.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
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
                src="./png250px/us.png"
                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg"
                transition={{
                    x: {
                        duration: RandomNumber(
                            dimensions[1] / 50,
                            dimensions[1] / 40
                        ),
                        ease: [0.5, 0.5, 0.5, 0.5],
                        repeat: Infinity,
                    },
                }}
                initial={{ opacity: 0 }}
                alt="United_States_Of_America_Flag"
            />
            {dimensions[0] > 706 && (
                <>
                    <motion.img
                        variants={imageMoveVarient}
                        animate={"animateLeft"}
                        src="./png250px/eg.png"
                        className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg "
                        transition={{
                            x: {
                                duration: RandomNumber(
                                    dimensions[1] / 50,
                                    dimensions[1] / 40
                                ),
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
                        src="./png250px/il.png"
                        className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg "
                        transition={{
                            x: {
                                duration: RandomNumber(
                                    dimensions[1] / 50,
                                    dimensions[1] / 40
                                ),
                                ease: [0.5, 0.5, 0.5, 0.5],
                                repeat: Infinity,
                            },
                        }}
                        initial={{ opacity: 0 }}
                        alt="Israel_Flag"
                    />

                    {dimensions[0] > 940 && (
                        <>
                            <motion.img
                                variants={imageMoveVarient}
                                animate={"animateLeft"}
                                src="./png250px/cc.png"
                                className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg "
                                transition={{
                                    x: {
                                        duration: RandomNumber(
                                            dimensions[1] / 50,
                                            dimensions[1] / 40
                                        ),
                                        ease: [0.5, 0.5, 0.5, 0.5],
                                        repeat: Infinity,
                                    },
                                }}
                                initial={{ opacity: 0 }}
                                alt="The_Cocos_Islands_Flag"
                            />

                            {dimensions[0] > 1030 && (
                                <motion.img
                                    variants={imageMoveVarient}
                                    animate={"animateRight"}
                                    src="./png250px/ht.png"
                                    className="w-auto h-16 rounded-md selection:bg-transparent hover:shadow-lg "
                                    transition={{
                                        x: {
                                            duration: RandomNumber(
                                                dimensions[1] / 50,
                                                dimensions[1] / 40
                                            ),
                                            ease: [0.5, 0.5, 0.5, 0.5],
                                            repeat: Infinity,
                                        },
                                    }}
                                    initial={{ opacity: 0 }}
                                    alt="Haiti_Flag"
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    ) : null;
};

export default Background;
