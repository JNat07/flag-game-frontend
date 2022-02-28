import * as React from "react";
import { io } from "socket.io-client";

interface myInfoType {
    myID: string;
    myName: string;
}

export interface playReadyType {
    name: string;
    socketId: string;
}

const SocketIO = () => {
    const [connect, setConnect] = React.useState<boolean>(false);
    const [myInfo, setMyInfo] = React.useState<myInfoType>({
        myID: "",
        myName: "",
    });
    const [playersReady, setPlayersReady] = React.useState<playReadyType[]>([
        { name: "", socketId: "" },
    ]);

    const [whoIwantToPlay, setWhoIwantToPlay] = React.useState<string>("");

    const [whoRequestMe, setWhoRequestMe] = React.useState<string[]>([]);

    interface ServerToClientEvents {
        noArg: () => void;
        basicEmit: (a: number, b: string, c: Buffer) => void;
        withAck: (d: string, callback: (e: number) => void) => void;
    }

    interface ClientToServerEvents {
        hello: () => void;
    }

    const socket: any = React.useRef<
        ServerToClientEvents | ClientToServerEvents
    >();

    React.useEffect(() => {
        // if playing multiplayer, connect
        if (connect) {
            // connect to socketio server
            socket.current = io("http://localhost:4000");

            // client-side
            socket.current.on("connect", () => {
                setMyInfo({
                    myID: socket.current.id,
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
            if (typeof socket.current !== "undefined")
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
        socket.current.emit("sendMyName", myInfo.myName);
    };

    const opponentHandler = (opponentID: string, myID: string) => {
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
