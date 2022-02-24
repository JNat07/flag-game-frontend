import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import * as React from "react";
import SocketIO from "../components/socketio/socketio";
import DarkMode from "../components/DarkMode";

export const SocketInfo = React.createContext({
    playersReady: new Array(),
    setConnect: (value: boolean) => {},
    myID: "tempID",
});
export const ThemeContext = React.createContext({
    theme: "placeholder",
    setTheme: (string: string) => {},
});

interface Props {
    myID: string;
    setMyID(value: string): void;
    playersReady: string[];
    setConnect(value: boolean): void;
}
function MyApp({ Component, pageProps }: AppProps) {
    const { myID, setMyID, playersReady, setConnect }: Props = SocketIO();
    const { theme, setTheme } = DarkMode();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <SocketInfo.Provider value={{ playersReady, setConnect, myID }}>
                <div className="min-h-screen bg-white dark:bg-black">
                    <Header />
                    <Component {...pageProps} />
                </div>
            </SocketInfo.Provider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
