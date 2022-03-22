import * as React from "react";
import avatarGenerator from "../AvatarGenerator";
import { NotifyPlayerType } from "../types";

const NotifyPlayer: React.FC<NotifyPlayerType> = ({
    myScore,
    theirScore,
    myName,
    theirName,
}) => {
    return (
        <div>
            <p>
                My ({myName}) Score: {myScore}
            </p>

            <img
                src={avatarGenerator(theirName)}
                width={70}
                height={70}
                alt="icon"
            />

            <p>
                Thier {theirName} Score: {theirScore}
            </p>
        </div>
    );
};

export default NotifyPlayer;
