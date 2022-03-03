import * as React from "react";
import type { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import FlagGameText from "../components/FlagGameText";

const Game: NextPage = () => {
    interface WrongState {
        wrongNumber: number;
        currentQuestion: string;
    }

    const [score, setScore] = React.useState<number>(0);
    const [wrongScore, setWrongScore] = React.useState<WrongState>({
        wrongNumber: 0,
        currentQuestion: "",
    });
    const [current, setCurrent] = React.useState<string[]>([""]);
    const [question, setQuestion] = React.useState<string>("");
    const [time, setTime] = React.useState<string>("");
    const [start, setStart] = React.useState(new Date());
    const [recentWrong, setRecentWrong] = React.useState<boolean>(false);

    React.useEffect(() => {
        setInterval(() => {
            const dateObject = new Date(new Date().getTime() - start.getTime());

            const minute = dateObject.getMinutes();
            const second = dateObject.getSeconds();

            const currentTime =
                (minute < 10 ? "0" + minute : minute) +
                ":" +
                (second < 10 ? "0" + second : second);

            setTime(currentTime);
        }, 1000);
    }, []);

    React.useEffect(() => {
        setStart(new Date());
    }, []);

    interface items {
        [key: string]: string;
    }
    // country codes and names
    const countries: items = {
        AF: "Afghanistan",
        AX: "Åland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia (Plurinational State of)",
        BQ: '"Bonaire',
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        CV: "Cabo Verde",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: '"Congo',
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Côte d'Ivoire",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czechia",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        SZ: "Eswatini",
        ET: "Ethiopia",
        FK: "Falkland Islands (Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island and McDonald Islands",
        VA: "Holy See",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran (Islamic Republic of)",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "Korea (Democratic People's Republic of)",
        KR: '"Korea',
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao People's Democratic Republic",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia (Federated States of)",
        MD: '"Moldova',
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MK: "North Macedonia",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: '"Palestine',
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthélemy",
        SH: '"Saint Helena',
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin (French part)",
        PM: "Saint Pierre and Miquelon",
        VC: "Saint Vincent and the Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten (Dutch part)",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia and the South Sandwich Islands",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SJ: "Svalbard and Jan Mayen",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: '"Taiwan',
        TJ: "Tajikistan",
        TZ: '"Tanzania',
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom of Great Britain and Northern Ireland",
        US: "United States of America",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela (Bolivarian Republic of)",
        VN: "Viet Nam",
        VG: "Virgin Islands (British)",
        VI: "Virgin Islands (U.S.)",
        WF: "Wallis and Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
    };

    const scoreHandler = (item: string): void => {
        if (item === question) {
            setRecentWrong(false);
            setScore(score + 1);
        } else {
            setRecentWrong(true);
            if (question === wrongScore.currentQuestion) return;
            setWrongScore({
                wrongNumber: wrongScore.wrongNumber + 1,
                currentQuestion: question,
            });
        }
    };

    const chooseCountry = (): string[] => {
        var countryA, countryB;

        // run at least once or as long as countries are same
        do {
            countryA =
                Object.keys(countries)[
                    (Object.keys(countries).length * Math.random()) << 0
                ];

            countryB =
                Object.keys(countries)[
                    (Object.keys(countries).length * Math.random()) << 0
                ];
        } while (countryA === countryB);

        return [countryA, countryB];
    };

    React.useEffect(() => {
        const [countryA, countryB] = chooseCountry();

        setQuestion(Math.random() > 0.5 ? countryA : countryB);

        setCurrent([countryA, countryB]);
    }, [score]);

    return (
        <div className="prose dark:prose-invert prose-p:m-0 prose-h3:m-0 prose-h2:m-0 prose-h4:m-0 mx-2 mt-[10vh] rounded-md py-2">
            <FlagGameText />

            <div className="mt-5 bg-white dark:bg-black">
                <div className="pb-5 rounded-lg ring-2 ring-gray-800 dark:ring-gray-200">
                    {/* info */}
                    <div className="grid grid-cols-3 rounded-t-lg bg-gray-200 py-0.5 px-4 dark:bg-gray-600">
                        <h4 className="">Score: {score}</h4>

                        <div />

                        <p className="m-0 font-mono place-self-end dark:text-white ">
                            {time ? time : "00:00"}
                        </p>
                    </div>
                    <h3 className="px-2 pt-4 pb-2 text-center break-words">
                        Which is {countries[question]}?
                    </h3>
                    <div className="grid  h-fit grid-cols-2 place-items-center gap-x-2  px-1.5">
                        {/* not using next images to allow for auto sizing */}
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
                        <AnimatePresence>
                            {recentWrong && (
                                <motion.div
                                    className="overflow-hidden"
                                    exit={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    initial={{ height: 0, opacity: 0 }}
                                >
                                    <div className="grid grid-cols-2 place-items-center px-1.5">
                                        <h3
                                            className={
                                                current[0] === question
                                                    ? "text-center text-green-500 dark:text-green-600"
                                                    : "text-center text-red-400 dark:text-red-600"
                                            }
                                        >
                                            {countries[current[0]]}
                                        </h3>

                                        <h3
                                            className={
                                                current[1] === question
                                                    ? "text-center text-green-500 dark:text-green-600"
                                                    : "text-center text-red-400 dark:text-red-600"
                                            }
                                        >
                                            {countries[current[1]]}
                                        </h3>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
