import * as React from "react";
import { io, Socket } from "socket.io-client";
import {
    MyInfoType,
    PlayReadyType,
    SocketClientTypes,
    OpponentInfo,
} from "../Types";

const SocketIO = () => {
    const [connect, setConnect] = React.useState<boolean>(false);
    const [myInfo, setMyInfo] = React.useState<MyInfoType>({
        myID: "",
        myName: "",
    });
    const [playersReady, setPlayersReady] = React.useState<PlayReadyType[]>([
        { name: "", id: "" },
    ]);
    const [whoIwantToPlay, setWhoIwantToPlay] = React.useState<string>("");
    const [whoRequestMe, setWhoRequestMe] = React.useState<string[]>([]);
    const [inRoom, setInRoom] = React.useState<boolean>(false);
    const [multiplayerGameInfo, setMultiplayerGameInfo] = React.useState<
        Array<string[]>
    >([[]]);
    const [opponentInfo, setOpponentInfo] = React.useState<OpponentInfo>({
        name: "",
        score: 0,
    });
    const socket: React.MutableRefObject<Socket<SocketClientTypes> | null> =
        React.useRef(null);

    React.useEffect(() => {
        // if playing multiplayer, connect
        if (connect) {
            // connect to socketio server
            socket.current = io(
                "https://flag-game-socketio-server.herokuapp.com/"
            );

            socket.current.emit("sendMyName", myInfo.myName);

            // client-side
            socket.current.on("connect", () => {
                setMyInfo({
                    myID: socket.current ? socket.current.id : "",
                    myName: myInfo.myName,
                });
            });

            socket.current.on("allPlayableUsers", (arg: PlayReadyType[]) => {
                setPlayersReady(arg);
            });

            socket.current.on("inform-opponent-ofPlayer", (arg: string[]) => {
                setWhoRequestMe(arg);
            });

            socket.current.on("put-in-room", () => {
                // server tells us we have been put into a room
                setInRoom(true);
            });

            // when in game and other opponent leaves
            socket.current.on("opponent-left", () => {
                setInRoom(false);
            });

            socket.current.on(
                "all-flags",
                (gameCountryList: Array<string[]>) => {
                    setMultiplayerGameInfo(gameCountryList);
                }
            );

            socket.current.on(
                "opponent-info",
                (opponentScore: OpponentInfo) => {
                    setOpponentInfo(opponentScore);
                }
            );
        } else {
            // prior to joining, cleanup leftover values
            cleanupMultiplayer();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connect]);

    // when unmount, preform a cleanup
    React.useEffect(
        () => () => {
            cleanupMultiplayer();
        },
        []
    );

    // cleanup multiplayer values
    const cleanupMultiplayer = (): void => {
        setConnect(false);
        setMyInfo({ myID: "", myName: "" });
        setOpponentInfo({ name: "", score: 0 });
        setWhoRequestMe([""]);
        setPlayersReady([{ name: "", id: "" }]);
        // insure player not playing alone in multiplayer
        setInRoom(false);
        setWhoIwantToPlay("");
        setMultiplayerGameInfo([[]]);
        socket.current?.disconnect();
    };

    const HandleSetName = (myNewName: string) => {
        setMyInfo({
            myID: myInfo.myID,
            myName: myNewName,
        });
    };

    const opponentHandler = (opponentID: string, myID: string): void => {
        if (socket.current) {
            if (whoIwantToPlay === "") {
                //no selection
                socket.current.emit("request-Opponent", { opponentID, myID });
                setWhoIwantToPlay(opponentID);
            } else if (whoIwantToPlay === opponentID) {
                // unselect by clicking on same person
                socket.current.emit("remove-Opponent", { opponentID, myID });
                setWhoIwantToPlay("");
            } else {
                // has person selected, but select someone else
                socket.current.emit("both-Opponent", {
                    opponentID,
                    whoIwantToPlay,
                    myID,
                });
                setWhoIwantToPlay(opponentID);
            }
        }
    };

    const handleSendScore = (score: number): void => {
        if (socket.current) {
            socket.current.emit("finished-my-score", {
                name: myInfo.myName,
                score: score,
            });
        }
    };

    return {
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
        setMultiplayerGameInfo,
        opponentInfo,
    };
};

export default SocketIO;
