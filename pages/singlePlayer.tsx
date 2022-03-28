import * as React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Game = dynamic(() => import("../components/game/game"), { ssr: false });

const SinglePlayer: NextPage = () => <Game singlePlayer={true} />;

export default SinglePlayer;
