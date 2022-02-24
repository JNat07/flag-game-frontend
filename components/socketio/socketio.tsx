import * as React from "react";
import { io } from "socket.io-client";

const SocketIO = () => {
    const [connect, setConnect] = React.useState<boolean>(false);
    const [myID, setMyID] = React.useState<string>("");
    const [playersReady, setPlayersReady] = React.useState<string[]>([]);

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
                setMyID(socket.current.id);
            });

            socket.current.on("allPlayableUsers", (arg: string[]) => {
                setPlayersReady(arg);
            });
        } else {
            // else disconnect as to not use resources
            // protection against being run prior to socket being set
            if (typeof socket.current === "undefined") {
            } else {
                socket.current.emit("requestDisconnect");
            }
        }
    }, [connect]);

    return { myID, setMyID, playersReady, setConnect };
};

export default SocketIO;
