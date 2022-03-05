import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import * as React from "react";
import SocketIO, { playReadyType } from "../components/socketio/socketio";
import DarkMode from "../components/DarkMode/DarkMode";

// socket info context
export const SocketInfo = React.createContext({
    myInfo: { myID: "", myName: "" },
    playersReady: [{ name: "", socketId: "" }],
    setConnect: (value: boolean) => {},
    HandleSetName: (value: string) => {},
    handleSendName: () => {},
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

// props passed down
interface Props {
    myInfo: { myID: string; myName: string };
    playersReady: playReadyType[];
    setConnect(value: boolean): void;
    HandleSetName(value: string): void;
    handleSendName(): void;
    opponentHandler(value: string, myID: string): void;
    whoIwantToPlay: string;
    whoRequestMe: string[];
}
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
    }: Props = SocketIO();

    const { theme, setTheme } = DarkMode();

    return (
        // wrap everything inside of contexts to be used later
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <SocketInfo.Provider
                value={{
                    myInfo,
                    playersReady,
                    setConnect,
                    HandleSetName,
                    handleSendName,
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
            </SocketInfo.Provider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
