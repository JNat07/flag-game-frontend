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

    const [whoWantsToPlay, setWhoWantsToPlay] = React.useState<string>("");

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

            socket.current.on("requestOpponentResp", (arg: string) => {
                console.log(arg);
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
    };

    const handleSendName = () => {
        socket.current.emit("sendMyName", myInfo.myName);
    };

    const opponentHandler = (opponentID: string) => {
        if (whoWantsToPlay === opponentID) {
            setWhoWantsToPlay("");
        } else {
            socket.current.emit("requestOpponent", opponentID);
            setWhoWantsToPlay(opponentID);
        }
    };

    return {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        handleSendName,
        opponentHandler,
        whoWantsToPlay,
    };
};

export default SocketIO;
