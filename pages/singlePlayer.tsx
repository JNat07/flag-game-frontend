import * as React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import FlagGameText from "../components/FlagGameText";
import { chooseCountry, countries } from "../components/FlagInfo/FlagInfo";
import CorrectNames from "../components/SinglePlayer/correctNames";

const Game: NextPage = () => {
    const [score, setScore] = React.useState<number>(0); // score (number correct)
    const [wrongQuestion, setWrongQuestion] = React.useState<string>(""); // most recently wrong question
    const [current, setCurrent] = React.useState<string[]>([""]); // the current countries
    const [question, setQuestion] = React.useState<string>("AF"); // current question
    const [time, setTime] = React.useState<string>(""); // current time
    const [start, setStart] = React.useState<Date>(new Date()); // date object of when started
    const [recentWrong, setRecentWrong] = React.useState<boolean>(false); // if most recent answer was wrong
    const [nextQuestion, setNextQuestion] = React.useState<number>(0); // the question number

    // on first run, set date (start time to be calculated)
    React.useEffect(() => {
        setStart(new Date());
    }, []);

    // timer (on page run)
    React.useEffect(() => {
        setInterval(() => {
            // calculate time elapsed based on Date (more accurate than setInterval )
            const dateObject = new Date(new Date().getTime() - start.getTime());

            // Calculate minutes, seconds, and configure string that's set
            const minute = dateObject.getMinutes();
            const second = dateObject.getSeconds();
            setTime(
                (minute < 10 ? "0" + minute : minute) +
                    ":" +
                    (second < 10 ? "0" + second : second)
            );
        }, 1000);
    }, []);

    // when next question changes, pick new flags
    React.useEffect(() => {
        const [countryA, countryB] = chooseCountry();

        // pick random number between 0 and 1 to determine which flag is the question
        setQuestion(Math.random() > 0.5 ? countryA : countryB);

        // the current flags to be shown
        setCurrent([countryA, countryB]);
    }, [nextQuestion]);

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

    return (
        <div className="prose dark:prose-invert prose-p:m-0 prose-h3:m-0 prose-h2:m-0 prose-h4:m-0 mx-2 mt-[10vh] rounded-md py-2">
            <FlagGameText />

            <div className="mt-5">
                <div className="pb-5 rounded-lg ring-2 ring-gray-800 dark:ring-gray-200">
                    {/* info */}
                    <div className="grid grid-cols-3 rounded-t-lg bg-gray-200 py-0.5 px-4 dark:bg-gray-600">
                        <h4 className="">Score: {score}</h4>

                        <div />

                        <p className="m-0 font-mono place-self-end dark:text-white ">
                            {/* time not intialized, then set to 00:00 (page load not complete) */}
                            {time ? time : "00:00"}
                        </p>
                    </div>
                    <h3 className="px-2 pt-4 pb-2 text-center break-words">
                        Which is {countries[question].replace(/['"]+/g, "")}?
                    </h3>
                    <div className="grid h-fit grid-cols-2 place-items-center gap-x-2  px-1.5">
                        {/* static page, not using next image */}
                        <motion.img
                            whileTap={{ scale: 0.96 }}
                            whileHover={{ scale: 0.96 }}
                            src={`/flags/${current[0]}.png`}
                            className="m-0 rounded-lg shadow-md cursor-pointer h-fit max-h-28 hover:shadow-xl"
                            onClick={() => scoreHandler(current[0])}
                            alt="Country_Flag_1"
                        />

                        <motion.img
                            whileTap={{ scale: 0.96 }}
                            whileHover={{ scale: 0.96 }}
                            className="m-0 rounded-lg shadow-md cursor-pointer h-fit max-h-28 hover:shadow-xl"
                            src={`/flags/${current[1]}.png`}
                            onClick={() => scoreHandler(current[1])}
                            alt="Country_Flag_2"
                        />
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
    );
};

export default Game;
