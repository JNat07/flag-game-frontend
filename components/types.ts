interface PlayReadyType {
    name: string;
    id: string;
}

interface MyInfoType {
    myID: string;
    myName: string;
}

interface OpponentInfo {
    name: string;
    score: number;
}

// socketio custom hook return types
interface SocketIOFunc {
    myInfo: { myID: string; myName: string };
    playersReady: PlayReadyType[];
    setConnect(value: boolean): void;
    HandleSetName(value: string): void;
    opponentHandler(value: string, myID: string): void;
    whoIwantToPlay: string;
    whoRequestMe: string[];
    inRoom: boolean;
    handleSendScore: (value: number) => void;
    multiplayerGameInfo: Array<string[]>;
    opponentInfo: {
        name: string;
        score: number;
    };
}

interface SocketClientTypes {
    allPlayableUsers: (arg: PlayReadyType[]) => void;
    "inform-opponent-ofPlayer": (arg: string[]) => void;
    sendMyName: (arg: string) => void;
    "remove-Opponent": ({}) => void;
    "request-Opponent": ({}) => void;
    "both-Opponent": ({}) => void;
    "put-in-room": () => void;
    notInGame: () => void;
    "opponent-left": () => void;
    "all-flags": (gameCountryList: Array<string[]>) => void;
    "finished-my-score": (score: { name: string; score: number }) => void;
    "opponent-info": (opponentInfo: OpponentInfo) => void;
}

interface ChoosePlayerProps {
    playersReady: PlayReadyType[];
    myInfo: { myID: string; myName: string };
    opponentHandler: (id: string, myID: string) => void;
    whoRequestMe: string[];
    whoIwantToPlay: string;
}

interface DarkModeType {
    theme: string;
    setTheme(value: string): void;
}

interface ThemeToggleType {
    pageLoaded: boolean;
}

interface ChooseNameProps {
    HandleSetName(value: string): void;
    myInfo: { myID: string; myName: string };
    setHasChooseName(value: boolean): void;
    setConnect: (value: boolean) => void;
}

interface CorrectNamesType {
    recentWrong: boolean;
    current: string[];
    question: string;
}

interface flagInfoType {
    [key: string]: string;
}

interface GameDataProps {
    score: number;
    wrongQuestion: string;
    current: string[];
    question: string;
    recentWrong: boolean;
    nextQuestion: number;
    sentMyScore: boolean;
    gameOver: boolean;
}

interface FlagGameProps {
    gameData: GameDataProps | { [key: string]: any };
    countries: flagInfoType;
    handleChoose(item: string): void;
    seGameDataFunc(
        key: string,
        value: any,
        key2?: string,
        value2?: any,
        key3?: string,
        value3?: any
    ): void;
    timeObj: {
        time: Date | number;
        seconds: Date | number;
        minutes: Date | number;
    };
}

interface GameProps {
    handleSendScore?: (value: number) => void;
    multiplayerGameInfo?: Array<string[]>;
    setMultiplayerGameInfo?: (value: Array<string[]>) => void;
    opponentInfo?: OpponentInfo;
    myName?: string;
}

interface NotInRoomProps {
    playersReady: PlayReadyType[];
    myInfo: { myID: string; myName: string };
    HandleSetName: (value: string) => void;
    hasChoosenName: boolean;
    setHasChooseName: (value: boolean) => void;
    opponentHandler: (id: string, myID: string) => void;
    whoIwantToPlay: string;
    whoRequestMe: string[];
    setConnect: (value: boolean) => void;
}

interface TimeProps {
    score: number;
    handleSendScore: (value: number) => void;
}

interface GameResultsType {
    myScore: number;
    theirScore: number;
    myName: string;
    theirName: string;
}

export type {
    PlayReadyType,
    MyInfoType,
    SocketIOFunc,
    SocketClientTypes,
    ChoosePlayerProps,
    DarkModeType,
    ThemeToggleType,
    ChooseNameProps,
    CorrectNamesType,
    flagInfoType,
    GameProps,
    NotInRoomProps,
    TimeProps,
    GameResultsType,
    GameDataProps,
    OpponentInfo,
    FlagGameProps,
};
