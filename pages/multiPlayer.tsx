import * as React from "react";
import { SocketContext } from "./_app";
import type { NextPage } from "next";
import ChoosePlayer from "../components/Multiplayer/ChoosePlayer";
import ChooseName from "../components/Multiplayer/chooseName";
import { NotInRoomReturn } from "../components/types";
import Game from "../components/game/game";

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
