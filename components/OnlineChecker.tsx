import * as React from "react";

const CheckOnline = (): boolean => {
    const [isOnline, setIsOnline] = React.useState<boolean>(true);

    React.useEffect(() => {
        window.addEventListener("offline", function (e) {
            // offline
            setIsOnline(false);
        });

        window.addEventListener("online", function (e) {
            // online
            setIsOnline(true);
        });
    });

    return isOnline;
};

export default CheckOnline;
