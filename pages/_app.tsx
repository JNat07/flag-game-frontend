import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import * as React from "react";
import SocketIO, { playReadyType } from "../components/socketio/socketio";
import DarkMode from "../components/DarkMode";

export const SocketInfo = React.createContext({
    myInfo: { myID: "", myName: "" },
    playersReady: [{ name: "", socketId: "" }],
    setConnect: (value: boolean) => {},
    HandleSetName: (value: string) => {},
    handleSendName: () => {},
});
export const ThemeContext = React.createContext({
    theme: "placeholder",
    setTheme: (string: string) => {},
});

interface Props {
    myInfo: { myID: string; myName: string };
    playersReady: playReadyType[];
    setConnect(value: boolean): void;
    HandleSetName(value: string): void;
    handleSendName(): void;
}
function MyApp({ Component, pageProps }: AppProps) {
    const {
        myInfo,
        playersReady,
        setConnect,
        HandleSetName,
        handleSendName,
    }: Props = SocketIO();
    const { theme, setTheme } = DarkMode();

    return (
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
                <div className="min-h-screen bg-white dark:bg-black">
                    <Header />
                    <Component {...pageProps} />
                </div>
            </SocketInfo.Provider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
