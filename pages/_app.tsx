import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // wrap everything inside of contexts to be used later
        <main className="to-gray-transparent h-screen overflow-hidden bg-black bg-gradient-to-r from-red-800 bg-[length:45px_50px] dark:from-red-900 lg:bg-[length:70px_50px]">
            {/* render header component and all other components */}
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}

export default MyApp;
