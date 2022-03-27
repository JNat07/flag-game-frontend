import { motion } from "framer-motion";
import * as React from "react";

const FlagGameText: React.FC = () => (
    <motion.div
        className="prose mt-4 w-fit rounded-md p-1 px-1.5 ring-1 ring-black prose-h1:m-0 dark:prose-invert dark:ring-white "
        whileTap={{ scale: 0.98 }}
    >
        <h1 className="cursor-pointer text-3xl font-medium  selection:bg-transparent">
            The
        </h1>
        <h1 className="cursor-pointer text-4xl font-semibold selection:bg-transparent">
            Flag
        </h1>
        <h1 className="cursor-pointer text-4xl font-black  selection:bg-transparent">
            Game
        </h1>
    </motion.div>
);

export default FlagGameText;
