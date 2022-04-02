import * as React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
    return (
        <footer className="absolute inset-x-0 bottom-0 z-20 prose prose-h4:m-0 prose-p:m-0 prose-img:m-0 ">
            <div className="grid w-screen grid-cols-2 rounded-t-[0.3rem] py-0.5 dark:rounded-t-md ">
                <motion.a
                    href="https://github.com/JNat07"
                    className="flex no-underline justify-self-start"
                >
                    <motion.img
                        src="../GitHubLogo.png"
                        className="h-8 w-fit invert lg:h-14"
                        alt="someInfo"
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.95 }}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                    <p className="self-end pb-1 text-xs text-white lg:pb-2 ">
                        JNat07 {new Date().getFullYear()}
                    </p>
                </motion.a>
            </div>
        </footer>
    );
};

export default Footer;
