import * as React from "react";
import { SocketContext } from "./_app";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
const ChoosePlayer = dynamic(
    () => import("../components/Multiplayer/ChoosePlayer"),
    {
        ssr: false,
    }
);
const ChooseName = dynamic(
    () => import("../components/Multiplayer/chooseName"),
    {
        ssr: false,
    }
);
const Game = dynamic(() => import("../components/game/game"), { ssr: false });
import { NotInRoomReturn } from "../components/types";

const MultiPlayer: NextPage = () => {
    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);

    return (
        // consume socket info passed down
        <SocketContext.Consumer>
            {({
                myInfo,
                playersReady,
                HandleSetName,
                handleSendName,
                inRoom,
                handleEvent,
                multiplayerGameInfo,
                opponentInfo,
            }) => (
                <>
                    {inRoom ? (
                        // render when user has choosen their name
                        <Game
                            singlePlayer={false}
                            handleEvent={handleEvent}
                            multiplayerGameInfo={multiplayerGameInfo}
                            opponentInfo={opponentInfo}
                            myName={myInfo.myName}
                        />
                    ) : (
                        // render when user needs to choose name
                        <NotInRoom
                            hasChoosenName={hasChoosenName}
                            setHasChooseName={setHasChooseName}
                            playersReady={playersReady}
                            myInfo={myInfo}
                            HandleSetName={HandleSetName}
                            handleSendName={handleSendName}
                        />
                    )}
                </>
            )}
        </SocketContext.Consumer>
    );
};

// have to make separate function to not unloose focus of input
const NotInRoom: React.FC<NotInRoomReturn> = ({
    playersReady,
    myInfo,
    HandleSetName,
    handleSendName,
    hasChoosenName,
    setHasChooseName,
}) => {
    return hasChoosenName ? (
        <ChoosePlayer playersReady={playersReady} myInfo={myInfo} />
    ) : (
        <ChooseName
            HandleSetName={HandleSetName}
            myInfo={myInfo}
            setHasChooseName={setHasChooseName}
            handleSendName={handleSendName}
        />
    );
};

export default MultiPlayer;
