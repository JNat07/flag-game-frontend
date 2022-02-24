import * as React from "react";
import { SocketInfo } from "./_app";
import ChoosePlayer from "../components/Multiplayer/ChoosePlayer";
import ChooseName from "../components/Multiplayer/chooseName";

const MultiPlayer: React.FC = () => {
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);
    return (
        <SocketInfo.Consumer>
            {({
                myInfo,
                playersReady,
                setConnect,
                HandleSetName,
                handleSendName,
            }) => (
                <>
                    {!hasChoosenName ? (
                        <ChooseName
                            HandleSetName={HandleSetName}
                            myInfo={myInfo}
                            setHasChooseName={setHasChooseName}
                            handleSendName={handleSendName}
                        />
                    ) : (
                        <ChoosePlayer
                            playersReady={playersReady}
                            setConnect={setConnect}
                            myInfo={myInfo}
                        />
                    )}
                </>
            )}
        </SocketInfo.Consumer>
    );
};

export default MultiPlayer;
