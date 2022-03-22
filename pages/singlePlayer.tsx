import * as React from "react";
import type { NextPage } from "next";
import Game from "../components/game/game";

const SinglePlayer: NextPage = () => <Game singlePlayer={true} />;

export default SinglePlayer;
