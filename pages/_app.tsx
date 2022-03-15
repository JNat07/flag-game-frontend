import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import * as React from "react";
import SocketIO from "../components/socketio/socketio";
import DarkMode from "../components/DarkMode/DarkMode";
import { socketIOFunc } from "../components/types";

// socket info context
export const SocketContext = React.createContext({
    myInfo: { myID: "", myName: "" },
    playersReady: [{ name: "", id: "" }],
    setConnect: (value: boolean) => {},
    HandleSetName: (value: string) => {},
    handleSendName: () => {},
    inRoom: false,
    handleEvent: () => {},
    multiplayerGameInfo: ["", ""],
});

// theme context
export const ThemeContext = React.createContext({
    theme: "placeholder",
    setTheme: (string: string) => {},
});

// game context
export const GameContext = React.createContext({
    opponentHandler: (value: string, myID: string) => {},
    whoIwantToPlay: "",
    whoRequestMe: [""],
});

function MyApp({ Component, pageProps }: AppProps) {
    const {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        handleSendName,
        opponentHandler,
        whoIwantToPlay,
        whoRequestMe,
        inRoom,
        handleEvent,
        multiplayerGameInfo,
    }: socketIOFunc = SocketIO();

    const { theme, setTheme } = DarkMode();

    return (
        // wrap everything inside of contexts to be used later
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <SocketContext.Provider
                value={{
                    myInfo,
                    playersReady,
                    setConnect,
                    HandleSetName,
                    handleSendName,
                    inRoom,
                    handleEvent,
                    multiplayerGameInfo,
                }}
            >
                <GameContext.Provider
                    value={{
                        opponentHandler,
                        whoIwantToPlay,
                        whoRequestMe,
                    }}
                >
                    <div className="min-h-screen bg-white dark:bg-black">
                        {/* render header component and all other components */}
                        <Header />
                        <Component {...pageProps} />
                    </div>
                </GameContext.Provider>
            </SocketContext.Provider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
