import * as React from "react";
import type { NextPage } from "next";
import { useAmp } from "next/amp";
import Head from "next/head";
import Menu from "../components/Index/Menu";

export const config = {
    amp: true,
};

const Home: NextPage = () => {
    const isAmp = useAmp();
    return (
        <main>
            {/* inject elem to head of page */}
            <Head>
                <title>The Flag Game</title>
                <meta name="The flag game" content="Built using NextJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* main game menu */}
            <Menu />
        </main>
    );
};

export default Home;
