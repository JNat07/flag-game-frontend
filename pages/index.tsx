import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CheckOnline from "../components/OnlineChecker";
import Menu from "../components/Index/Menu";

const Home: NextPage = () => {
    // custom offline hook
    if (!CheckOnline()) alert("offline");

    return (
        <main className="bg-white dark:bg-black">
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
