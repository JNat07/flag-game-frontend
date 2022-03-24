import * as React from "react";
import { motion } from "framer-motion";
import { chooseCountry, countries } from "../FlagInfo/FlagInfo";
import Time from "../SinglePlayer/time";
import FlagGameText from "../FlagGameText";
import CorrectNames from "../SinglePlayer/correctNames";
import { GameProps } from "../types";
import CheckOnline from "../OnlineChecker";
import NotifyPlayer from "./notifyPlayer";

const Game: React.FC<GameProps> = ({
    singlePlayer,
    handleEvent,
    multiplayerGameInfo,
    opponentInfo = {
        name: "",
        score: 0,
    },
    myName = "",
}) => {
    const [score, setScore] = React.useState<number>(0); // score (number correct)
    const [wrongQuestion, setWrongQuestion] = React.useState<string>(""); // most recently wrong question
    const [current, setCurrent] = React.useState<string[]>(["", ""]); // the current countries
    const [question, setQuestion] = React.useState<string>("AF"); // current question
    const [recentWrong, setRecentWrong] = React.useState<boolean>(false); // if most recent answer was wrong
    const [nextQuestion, setNextQuestion] = React.useState<number>(0); // the question number
    const [fired, setFired] = React.useState<boolean>(false);
    const [gameOver, setGameOver] = React.useState<boolean>(false);
    const [time, minutes, seconds] = Time();

    if (minutes >= 1 && !fired) {
        setFired(true);
        if (handleEvent) handleEvent(score);
        setGameOver(true);
    }

    if (singlePlayer) {
        // when next question changes, pick new flags
        React.useEffect(() => {
            const [countryA, countryB] = chooseCountry();
            // pick random number between 0 and 1 to determine which flag is the question
            setQuestion(Math.random() > 0.5 ? countryA : countryB);

            // the current flags to be shown
            setCurrent([countryA, countryB]);
            return () => setCurrent([]);
        }, [nextQuestion]);
    } else {
        // custom offline hook
        if (!CheckOnline()) alert("offline");
        // if multiplayer
        if (multiplayerGameInfo) {
            React.useEffect(() => {
                // get individual arrays that contain the countries and the question
                const [countryA, countryB, newQuestion] =
                    multiplayerGameInfo[nextQuestion];

                setCurrent([countryA, countryB]);
                setQuestion(newQuestion);

                return () => setCurrent([]);
            }, [multiplayerGameInfo, nextQuestion]);
        }
    }

    const scoreHandler = (item: string): void => {
        // if flag clicked is correct
        if (item === question) {
            // remove text below flags
            setRecentWrong(false);

            // add to score if answer isn't shown on screen
            if (wrongQuestion !== question) setScore(score + 1);

            // once correct flag clicked, set next question
            setNextQuestion(nextQuestion + 1);
        } else {
            // if flag clicked is wrong, show text
            setRecentWrong(true);

            // if already set, don't reset
            if (question === wrongQuestion) return;
            setWrongQuestion(question);
        }
    };

    return !gameOver ? (
        <div className="prose mx-2 mt-[10vh] rounded-md py-2 prose-h2:m-0 prose-h3:m-0 prose-h4:m-0 prose-p:m-0 dark:prose-invert">
            <FlagGameText />

            <div className="mt-5">
                <div className="pb-5 rounded-lg ring-2 ring-gray-800 dark:ring-gray-200">
                    {/* info */}
                    <div className="grid grid-cols-3 rounded-t-lg bg-gray-200 py-0.5 px-4 dark:bg-gray-600">
                        <h4>Score: {score}</h4>
                        <div />

                        <p className="m-0 font-mono place-self-end dark:text-white ">
                            {/* time not initialized, then set to 00:00 (page load not complete) */}
                            {time
                                ? (minutes < 10 ? "0" + minutes : minutes) +
                                  ":" +
                                  (seconds < 10 ? "0" + seconds : seconds)
                                : "00:00"}
                        </p>
                    </div>
                    <h3 className="px-2 pt-4 pb-2 text-center break-words">
                        Which is {countries[question]}?
                    </h3>

                    {/* Flags */}
                    <div className="grid h-fit grid-cols-2 place-items-center gap-x-2  px-1.5">
                        {/* static page, not using next image */}
                        {current[1] !== "" && current[2] !== "" && (
                            <>
                                <motion.img
                                    whileTap={{ scale: 0.96 }}
                                    whileHover={{ scale: 0.96 }}
                                    src={`/static/flags/${current[0]}.png`}
                                    className="m-0 rounded-lg shadow-md cursor-pointer h-fit max-h-28 hover:shadow-xl"
                                    onClick={() => scoreHandler(current[0])}
                                    alt="Country_Flag_1"
                                />

                                <motion.img
                                    whileTap={{ scale: 0.96 }}
                                    whileHover={{ scale: 0.96 }}
                                    className="m-0 rounded-lg shadow-md cursor-pointer h-fit max-h-28 hover:shadow-xl"
                                    src={`/static/flags/${current[1]}.png`}
                                    onClick={() => scoreHandler(current[1])}
                                    alt="Country_Flag_2"
                                />
                            </>
                        )}
                    </div>

                    <div className="mt-4">
                        <CorrectNames
                            recentWrong={recentWrong}
                            question={question}
                            current={current}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <NotifyPlayer
            myScore={score}
            theirScore={opponentInfo.score}
            myName={myName}
            theirName={opponentInfo.name}
        />
    );
};

export default Game;
