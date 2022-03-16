import * as React from "react";

const Time = (): (number | Date)[] => {
    const [time, setTime] = React.useState<string>(""); // current time
    const [start, setStart] = React.useState<Date>(new Date()); // date object of when started

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

    const currentTime = new Date(new Date().getTime() - start.getTime());

    return [currentTime, currentTime.getMinutes(), currentTime.getSeconds()];
};

export default Time;
