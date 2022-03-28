import * as React from "react";
import { socketIOFunc } from "../components/types";
import SocketIO from "../components/socketio/socketio";
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
import { NotInRoomProps } from "../components/types";

const MultiPlayer: NextPage = () => {
    const {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        handleSendName,
        opponentHandler,
        whoIwantToPlay,
        whoRequestMe,
        inRoom,
        handleEvent,
        multiplayerGameInfo,
        opponentInfo,
    }: socketIOFunc = SocketIO();

    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);

    React.useEffect(
        () => setConnect(true),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return inRoom ? (
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
            whoIwantToPlay={whoIwantToPlay}
            opponentHandler={opponentHandler}
            whoRequestMe={whoRequestMe}
        />
    );
};

// have to make separate function to not unloose focus of input
const NotInRoom: React.FC<NotInRoomProps> = ({
    playersReady,
    myInfo,
    HandleSetName,
    handleSendName,
    hasChoosenName,
    opponentHandler,
    setHasChooseName,
    whoIwantToPlay,
    whoRequestMe,
}) => {
    return hasChoosenName ? (
        <ChoosePlayer
            playersReady={playersReady}
            myInfo={myInfo}
            opponentHandler={opponentHandler}
            whoIwantToPlay={whoIwantToPlay}
            whoRequestMe={whoRequestMe}
        />
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
