import * as React from "react";
import { SocketContext } from "./_app";
import type { NextPage } from "next";
import ChoosePlayer from "../components/Multiplayer/ChoosePlayer";
import ChooseName from "../components/Multiplayer/chooseName";
import { NotInRoomReturn } from "../components/types";

const MultiPlayer: NextPage = () => {
    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);

    const NotInRoom: React.FC<NotInRoomReturn> = ({
        playersReady,
        myInfo,
        HandleSetName,
        handleSendName,
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

    return (
        // consume socket info passed down
        <SocketContext.Consumer>
            {({
                myInfo,
                playersReady,
                setConnect,
                HandleSetName,
                handleSendName,
                inRoom,
            }) => (
                <>
                    {inRoom ? (
                        // render when user has choosen their name
                        <div>go into game</div>
                    ) : (
                        // render when user needs to choose name
                        <NotInRoom
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

export default MultiPlayer;
