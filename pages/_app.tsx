import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // wrap everything inside of contexts to be used later
        <main className="h-screen overflow-hidden bg-center bg-blueprint dark:bg-blueprintDark">
            {/* render header component and all other components */}
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}

export default MyApp;
