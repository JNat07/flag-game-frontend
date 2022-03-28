interface playReadyType {
    name: string;
    id: string;
}

interface myInfoType {
    myID: string;
    myName: string;
}

interface OpponentInfo {
    name: string;
    score: number;
}

// socketio custom hook return types
interface socketIOFunc {
    myInfo: { myID: string; myName: string };
    playersReady: playReadyType[];
    setConnect(value: boolean): void;
    HandleSetName(value: string): void;
    handleSendName(): void;
    opponentHandler(value: string, myID: string): void;
    whoIwantToPlay: string;
    whoRequestMe: string[];
    inRoom: boolean;
    handleEvent: (value: number) => void;
    multiplayerGameInfo: Array<string[]>;
    opponentInfo: {
        name: string;
        score: number;
    };
}

interface socketClientTypes {
    allPlayableUsers: (arg: playReadyType[]) => void;
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

interface choosePlayerProps {
    playersReady: playReadyType[];
    myInfo: { myID: string; myName: string };
    opponentHandler: (id: string, myID: string) => void;
    whoRequestMe: string[];
    whoIwantToPlay: string;
}

interface darkModeType {
    theme: string;
    setTheme(value: string): void;
}

interface themeToggleType {
    pageLoaded: boolean;
}

interface chooseNameType {
    HandleSetName(value: string): void;
    myInfo: { myID: string; myName: string };
    setHasChooseName(value: boolean): void;
    handleSendName(): void;
}

interface correctNamesType {
    recentWrong: boolean;
    current: string[];
    question: string;
}

interface flagInfoType {
    [key: string]: string;
}

interface GameProps {
    singlePlayer: boolean;
    handleEvent?: (value: number) => void;
    multiplayerGameInfo?: Array<string[]>;
    setMultiplayerGameInfo?: (value: Array<string[]>) => void;
    opponentInfo?: OpponentInfo;
    myName?: string;
}

interface NotInRoomProps {
    playersReady: playReadyType[];
    myInfo: { myID: string; myName: string };
    HandleSetName: (value: string) => void;
    handleSendName: () => void;
    hasChoosenName: boolean;
    setHasChooseName: (value: boolean) => void;
    opponentHandler: (id: string, myID: string) => void;
    whoIwantToPlay: string;
    whoRequestMe: string[];
}

interface TimeProps {
    score: number;
    handleEvent: (value: number) => void;
}

interface NotifyPlayerType {
    myScore: number;
    theirScore: number;
    myName: string;
    theirName: string;
}

export type {
    playReadyType,
    myInfoType,
    socketIOFunc,
    socketClientTypes,
    choosePlayerProps,
    darkModeType,
    themeToggleType,
    chooseNameType,
    correctNamesType,
    flagInfoType,
    GameProps,
    NotInRoomProps,
    TimeProps,
    NotifyPlayerType,
    OpponentInfo,
};
