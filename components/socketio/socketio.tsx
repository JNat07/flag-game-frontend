import * as React from "react";
import { io, Socket } from "socket.io-client";

interface myInfoType {
    myID: string;
    myName: string;
}

export interface playReadyType {
    name: string;
    id: string;
}

const SocketIO = () => {
    const [connect, setConnect] = React.useState<boolean>(false);
    const [myInfo, setMyInfo] = React.useState<myInfoType>({
        myID: "",
        myName: "",
    });
    const [playersReady, setPlayersReady] = React.useState<playReadyType[]>([
        { name: "", id: "" },
    ]);

    const [whoIwantToPlay, setWhoIwantToPlay] = React.useState<string>("");

    const [whoRequestMe, setWhoRequestMe] = React.useState<string[]>([]);

    interface socketTypes {
        allPlayableUsers: (arg: playReadyType[]) => void;
        "inform-opponent-ofPlayer": (arg: string[]) => void;
        requestDisconnect: () => void;
        sendMyName: (arg: string) => void;
        "remove-Opponent": ({}) => void;
        "request-Opponent": ({}) => void;
        "both-Opponent": ({}) => void;
    }

    const socket: React.MutableRefObject<Socket<socketTypes> | null> =
        React.useRef(null);

    React.useEffect(() => {
        // if playing multiplayer, connect
        if (connect) {
            // connect to socketio server
            socket.current = io("http://localhost:4000");

            // client-side
            socket.current.on("connect", () => {
                setMyInfo({
                    myID: socket.current ? socket.current.id : "",
                    myName: myInfo.myName,
                });
            });

            socket.current.on("allPlayableUsers", (arg: playReadyType[]) => {
                setPlayersReady(arg);
            });

            socket.current.on("inform-opponent-ofPlayer", (arg: string[]) => {
                setWhoRequestMe(arg);
            });
        } else {
            // else disconnect as to not use resources
            // protection against being run prior to socket being set
            if (typeof socket.current !== "undefined" && socket.current)
                socket.current.emit("requestDisconnect");
        }
    }, [connect]);

    const HandleSetName = (myNewName: string) => {
        setMyInfo({
            myID: myInfo.myID,
            myName: myNewName,
        });
        localStorage.setItem("myName", myNewName);
    };

    const handleSendName = () => {
        if (socket.current) {
            socket.current.emit("sendMyName", myInfo.myName);
        }
    };

    const opponentHandler = (opponentID: string, myID: string) => {
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

    return {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        handleSendName,
        opponentHandler,
        whoIwantToPlay,
        whoRequestMe,
    };
};

export default SocketIO;
