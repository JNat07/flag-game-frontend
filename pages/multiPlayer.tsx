import * as React from "react";
import type { NextPage } from "next";
import { SocketIOFunc, NotInRoomProps } from "../components/types";
import SocketIO from "../components/socketio/socketio";
import dynamic from "next/dynamic";
import Loading from "../components/Loading";
import ChooseName from "../components/Multiplayer/chooseName";

const ChoosePlayer = dynamic(
    () => import("../components/Multiplayer/ChoosePlayer"),
    {
        ssr: false,
        loading: () => <Loading />,
    }
);

import GameLogic from "../components/Game/GameLogic";

const MultiPlayer: NextPage = () => {
    const {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        opponentHandler,
        whoIwantToPlay,
        whoRequestMe,
        inRoom,
        handleSendScore,
        multiplayerGameInfo,
        opponentInfo,
    }: SocketIOFunc = SocketIO();

    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);

    return inRoom ? (
        // render when user has choosen their name
        <GameLogic
            handleSendScore={handleSendScore}
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
            whoIwantToPlay={whoIwantToPlay}
            setConnect={setConnect}
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
    hasChoosenName,
    opponentHandler,
    setHasChooseName,
    whoIwantToPlay,
    whoRequestMe,
    setConnect,
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
            setConnect={setConnect}
        />
    );
};

export default MultiPlayer;
