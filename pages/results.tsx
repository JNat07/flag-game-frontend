import * as React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";
import avatarGenerator from "../components/AvatarGenerator";
import Head from "next/head";

const Results: NextPage = () => {
    const container: Variants = {
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const individual: Variants = {
        show: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const router = useRouter();

    const { s1, s2, n1, n2 } = router.query;
    const [didAnimate, setDidAnimate] = React.useState<boolean>(false);

    React.useEffect(() => {
        // if went here without value, go to index
        if (s1 === undefined) {
            router.push("/");
        }
    }, []);

    const backgroundHelper = (name: string | string[]): string => {
        if (didAnimate && s1 && s2) {
            if (s1 > s2 && name === n1) {
                return "text-center bg-green-500/80";
            } else if (s1 < s2 && name === n2) {
                return "text-center bg-green-500/80";
            } else {
                return "text-center bg-red-400/70";
            }
        } else {
            return "text-center";
        }
    };

    return (
        <>
            <Head>
                <title>The Flag Game</title>
            </Head>
            <div className="prose prose-p:m-0 prose-img:m-0 dark:prose-invert">
                <h1 className="my-8 text-center underline">Time is Up</h1>
                {s1 && s2 ? (
                    <h3 className="my-8 text-center underline">
                        {s1 > s2 ? "Victory!" : "Defeat"}
                    </h3>
                ) : (
                    <div>
                        <p>{s1}</p>
                    </div>
                )}

                {s1 && s2 && n1 && n2 ? (
                    <motion.div
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                        className="flex justify-around"
                    >
                        <motion.div
                            variants={individual}
                            className="relative rounded-md ring-1 ring-gray-400"
                        >
                            <div
                                className={
                                    didAnimate && s1 > s2
                                        ? "bg-yellow-300"
                                        : "bg-gray-200"
                                }
                            >
                                <p className="absolute top-0 right-1.5 text-xl text-green-600">
                                    {s1}
                                </p>

                                <img
                                    src={avatarGenerator(n1.toString())}
                                    alt="icon"
                                    className="pt-2 rounded-t-lg h-36"
                                />
                            </div>
                            <p className={backgroundHelper(n1)}>{n1}</p>
                        </motion.div>

                        <motion.div
                            variants={individual}
                            className="relative rounded-md ring-1 ring-gray-400"
                            onAnimationComplete={() => setDidAnimate(true)}
                        >
                            <div
                                className={
                                    didAnimate && s1 < s2
                                        ? "bg-yellow-300"
                                        : "bg-gray-200"
                                }
                            >
                                <p className="absolute top-0 right-1.5 text-xl text-green-600">
                                    {s2}
                                </p>

                                <img
                                    src={avatarGenerator(n2.toString())}
                                    alt="icon"
                                    className="pt-2 rounded-t-lg h-36"
                                />
                            </div>
                            <p className={backgroundHelper(n2)}>{n2}</p>
                        </motion.div>
                    </motion.div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
};

export default Results;

//   <>
//                         <div className="flex justify-center mx-2 rounded-lg ring ring-red-400">
//                             <img
//                                 src={avatarGenerator(n1.toString())}
//                                 alt="icon"
//                                 className="h-64"
//                             />
//                         </div>

//                         <p>
//                             <img
//                                 src={avatarGenerator(n2.toString())}
//                                 alt="icon"
//                                 className="h-32"
//                             />
//                             Thier {n2} Score: {n2}
//                         </p>
//                     </>
