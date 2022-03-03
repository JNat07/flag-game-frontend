import * as React from "react";
import { FlagIcon } from "@heroicons/react/outline";

const FlagGameText: React.FC = () => (
    <div className="flex items-center justify-center space-x-2">
        <h1 className="m-0 text-2xl">The Flag Game</h1>
        <FlagIcon className="w-6 h-6 " />
    </div>
);

export default FlagGameText;
