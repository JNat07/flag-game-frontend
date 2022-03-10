import * as React from "react";
import type { NextPage } from "next";
import Game from "../components/game";
import { SocketContext } from "./_app";

const SinglePlayer: NextPage = () => {
    return (
        <SocketContext.Consumer>
            {({ myInfo, playersReady, setConnect, HandleSetName }) => (
                <Game singlePlayer={true} />
            )}
        </SocketContext.Consumer>
    );
};

export default SinglePlayer;
