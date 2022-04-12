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
                duration: 4,
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

    return (
        <>
            <Head>
                <title>The Flag Game | Results</title>
            </Head>
            <div className="prose mt-[10vh] prose-h4:m-0 prose-p:m-0 prose-img:m-0 dark:prose-invert">
                <h1 className="my-8 text-center underline">Results</h1>
                {s1 && s2 && n2 && (
                    <h2 className="my-8 text-center underline">
                        {s1 > s2 ? "Victory!" : "Defeat"}
                    </h2>
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
                                        ? "bg-gradient-to-r from-[#ffd700] to-[#fee241]"
                                        : "bg-gradient-to-r from-red-400/70 to-red-300"
                                }
                            >
                                <p
                                    className={
                                        didAnimate && s1 > s2
                                            ? "absolute top-0 right-1.5 text-center text-xl text-black"
                                            : "absolute top-0 right-1.5 text-center text-xl text-white"
                                    }
                                >
                                    {s1}
                                </p>

                                <img
                                    src={avatarGenerator(
                                        n1.toString(),
                                        s1 < s2
                                    )}
                                    alt="icon"
                                    className="pt-2 rounded-t-lg h-36"
                                />
                            </div>
                            <h4 className="text-center">{n1}</h4>
                        </motion.div>

                        <motion.div
                            variants={individual}
                            className="relative rounded-md ring-1 ring-gray-400"
                            onAnimationComplete={() => setDidAnimate(true)}
                        >
                            <div
                                className={
                                    didAnimate && s1 < s2
                                        ? "bg-gradient-to-r from-[#ffd700] to-[#fee241]"
                                        : "bg-gradient-to-r from-red-400/70 to-red-300"
                                }
                            >
                                <p
                                    className={
                                        didAnimate && s1 < s2
                                            ? "absolute top-0 right-1.5 text-center text-xl text-black"
                                            : "absolute top-0 right-1.5 text-center text-xl text-white"
                                    }
                                >
                                    {s2}
                                </p>

                                <img
                                    src={avatarGenerator(
                                        n2.toString(),
                                        s1 > s2
                                    )}
                                    alt="icon"
                                    className="pt-2 rounded-t-lg h-36"
                                />
                            </div>
                            <h4 className="text-center">{n2}</h4>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div className="mt-[5vh] flex justify-around">
                        <div className="relative rounded-md ring-1 ring-gray-400">
                            <div
                                className={
                                    "bg-gradient-to-r from-[#ffd700] to-[#fee241]"
                                }
                            >
                                <motion.p
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                    className={
                                        "absolute top-0 right-1.5 text-center text-xl text-black"
                                    }
                                >
                                    {s1}
                                </motion.p>

                                <img
                                    src={
                                        n1
                                            ? avatarGenerator(
                                                  n1.toString(),
                                                  false
                                              )
                                            : avatarGenerator("", false)
                                    }
                                    alt="icon"
                                    className="pt-2 rounded-t-lg h-36"
                                />
                            </div>
                            <h4 className="text-center">{n1}</h4>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Results;
