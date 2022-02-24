import * as React from "react";

interface Props {
    HandleSetName(value: string): void;
    myInfo: { myID: string; myName: string };
    setHasChooseName(value: boolean): void;
    handleSendName(): void;
}

const ChooseName: React.FC<Props> = ({
    HandleSetName,
    myInfo,
    setHasChooseName,
    handleSendName,
}) => {
    const handler = (e: any) => {
        handleSendName();
        setHasChooseName(true);
    };

    return (
        <div>
            <input
                onChange={(e) => HandleSetName(e.target.value)}
                placeholder="Username"
                value={myInfo.myName}
            />

            <button onClick={(e) => handler(e)}>Choose Name</button>
        </div>
    );
};

export default ChooseName;
