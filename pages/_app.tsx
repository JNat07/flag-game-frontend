import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // wrap everything inside of contexts to be used later
        <main className="h-screen overflow-hidden bg-white dark:bg-black">
            {/* render header component and all other components */}
            <Header />
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
