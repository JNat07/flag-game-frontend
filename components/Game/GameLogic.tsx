import * as React from "react";
import { useRouter } from "next/router";
import { chooseCountry, countries } from "../FlagInfo/Flaginfo";
import { GameProps, GameDataProps } from "../types";
import FlagGame from "./FlagGame";
import Time from "./Time";

const GameLogic: React.FC<GameProps> = ({
    handleSendScore,
    multiplayerGameInfo,
    opponentInfo = {
        name: "",
        score: 0,
    },
    myName = "",
}) => {
    const router = useRouter();

    // game data that holds logic
    const [gameData, setGameData] = React.useState<
        GameDataProps | { [key: string]: any }
    >({
        score: 0,
        wrongQuestion: "",
        current: [""],
        question: "",
        recentWrong: false,
        nextQuestion: 0,
        sentMyScore: false,
        gameOver: false,
    });

    // dynamic function setter
    const seGameDataFunc = (
        key: string,
        value: any,
        key2?: string,
        value2?: any,
        key3?: string,
        value3?: any
    ): void => {
        const values: { [key: string]: any } = {
            score: gameData.score,
            wrongQuestion: gameData.wrongQuestion,
            current: gameData.current,
            question: gameData.question,
            recentWrong: gameData.recentWrong,
            nextQuestion: gameData.nextQuestion,
            sentMyScore: gameData.sentMyScore,
            gameOver: gameData.gameOver,
        };

        values[key] = value;

        if (key2 && value2) values[key2] = value2;
        if (key3 && value3) values[key3] = value3;

        setGameData(values);
    };

    // feels weird having time here. Think it needs to be moved
    const [time, minutes, seconds] = Time();

    // run when opponentInfo updates
    React.useEffect(() => {
        // if user playing multiplayer and time has elapsed, send to results screen
        if (router.pathname === "/multiplayer" && seconds >= 10) {
            router.push(
                `/results?s1=${gameData.score}&s2=${opponentInfo.score}&n1=${myName}&n2=${opponentInfo.name}`
            );
        }
    }, [opponentInfo]);

    // run every time seconds value updates
    React.useEffect(() => {
        // if playing single player, then just send to results page
        if (router.pathname === "/singleplayer" && seconds >= 10) {
            router.push(`/results?s1=${gameData.score}&n1=You`);
            // send score to opponent (triggers above useEffect for opponent)
        } else if (router.pathname === "/multiplayer" && seconds >= 10) {
            if (handleSendScore) {
                handleSendScore(gameData.score);
                seGameDataFunc("sentMyScore", true);
            }
        }
    }, [seconds]);

    // useEffect cleanup function
    const cleanupGameData = (): void => {
        setGameData({
            score: 0,
            wrongQuestion: "",
            current: [],
            question: "",
            recentWrong: false,
            nextQuestion: 0,
            sentMyScore: false,
            gameOver: false,
        });
    };

    // if single player, choose country
    React.useEffect(() => {
        if (router.pathname === "/singleplayer") {
            const [countryA, countryB] = chooseCountry();

            // pick random number between 0 and 1 to determine which flag is the question
            const newQuestion = Math.random() > 0.5 ? countryA : countryB;

            seGameDataFunc(
                "current",
                [countryA, countryB],
                "question",
                newQuestion
            );

            return () => cleanupGameData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameData.nextQuestion]);

    // if multiplayer, then show those flags
    React.useEffect(() => {
        if (router.pathname === "/multiplayer" && multiplayerGameInfo) {
            // get individual values (countries, and question)
            const [countryA, countryB, newQuestion] =
                multiplayerGameInfo[gameData.nextQuestion];

            seGameDataFunc(
                "current",
                [countryA, countryB],
                "question",
                newQuestion
            );

            return () => cleanupGameData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [multiplayerGameInfo, gameData.nextQuestion]);

    // handle when the player chooses a flag
    const handleChoose = (item: string): void => {
        // if choose correct and not first wrong
        if (
            item === gameData.question &&
            !gameData.current.includes(gameData.wrongQuestion)
        ) {
            seGameDataFunc(
                "score",
                gameData.score + 1,
                "recentWrong",
                false,
                "nextQuestion",
                gameData.nextQuestion + 1
            );
        } else if (
            // if choose correct but got it wrong first
            item === gameData.question &&
            gameData.current.includes(gameData.wrongQuestion)
        ) {
            seGameDataFunc(
                "recentWrong",
                false,
                "nextQuestion",
                gameData.nextQuestion + 1
            );
        } else {
            // if choose wrong
            seGameDataFunc(
                "recentWrong",
                true,
                "wrongQuestion",
                gameData.question
            );
        }
    };

    // run game till results page
    return (
        <FlagGame
            gameData={gameData}
            countries={countries}
            handleChoose={handleChoose}
            seGameDataFunc={seGameDataFunc}
            timeObj={{
                time: time,
                seconds: seconds,
                minutes: minutes,
            }}
        />
    );
};

export default GameLogic;
