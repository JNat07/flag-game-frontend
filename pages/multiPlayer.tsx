import * as React from "react";
import { SocketInfo } from "./_app";
import ChoosePlayer from "../components/Multiplayer/ChoosePlayer";
import ChooseName from "../components/Multiplayer/chooseName";

const MultiPlayer: React.FC = () => {
    // state to track what to render
    const [hasChoosenName, setHasChooseName] = React.useState<boolean>(false);
    return (
        // consume socket info passed down
        <SocketInfo.Consumer>
            {({ myInfo, playersReady, HandleSetName, handleSendName }) => (
                <>
                    {!hasChoosenName ? (
                        // render when user needs to choose name
                        <ChooseName
                            HandleSetName={HandleSetName}
                            myInfo={myInfo}
                            setHasChooseName={setHasChooseName}
                            handleSendName={handleSendName}
                        />
                    ) : (
                        // render when user has choosen their name
                        <ChoosePlayer
                            playersReady={playersReady}
                            myInfo={myInfo}
                        />
                    )}
                </>
            )}
        </SocketInfo.Consumer>
    );
};

export default MultiPlayer;
