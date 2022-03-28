import * as React from "react";
import avatarGenerator from "../AvatarGenerator";
import { NotifyPlayerType } from "../types";
import Image from "next/image";

const NotifyPlayer: React.FC<NotifyPlayerType> = ({
    myScore,
    theirScore,
    myName,
    theirName,
}) => {
    return (
        <div className="prose prose-img:m-0 dark:prose-invert">
            <h1 className="my-8 text-center underline">
                {myScore > theirScore ? "Victory!" : "Defeat"}
            </h1>

            <div className="mx-2 flex justify-center rounded-lg ring ring-red-400">
                <Image
                    src={avatarGenerator(myName)}
                    alt="icon"
                    className="h-64"
                />
            </div>

            <p>
                <Image
                    placeholder="blur"
                    src={avatarGenerator(theirName)}
                    alt="icon"
                    className="h-32"
                />
                Thier {theirName} Score: {theirScore}
            </p>
        </div>
    );
};

export default NotifyPlayer;
