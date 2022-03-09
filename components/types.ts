interface playReadyType {
    name: string;
    id: string;
}

interface myInfoType {
    myID: string;
    myName: string;
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
}

interface socketClientTypes {
    allPlayableUsers: (arg: playReadyType[]) => void;
    "inform-opponent-ofPlayer": (arg: string[]) => void;
    requestDisconnect: () => void;
    sendMyName: (arg: string) => void;
    "remove-Opponent": ({}) => void;
    "request-Opponent": ({}) => void;
    "both-Opponent": ({}) => void;
}

interface choosePlayerProps {
    playersReady: playReadyType[];
    myInfo: { myID: string; myName: string };
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
};
